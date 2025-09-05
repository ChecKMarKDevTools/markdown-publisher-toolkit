import { test, expect } from '@playwright/test';
import { exec } from 'child_process';
import { writeFileSync, unlinkSync, existsSync } from 'fs';
import { promisify } from 'util';

const execAsync = promisify(exec);

test.describe('convert.js CLI', () => {
  const testMarkdownFile = 'test-temp.md';
  const testMarkdownContent = `# Test Article

This is a **test** article with:

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello World');
\`\`\`

> Blockquote example
`;

  test.beforeEach(() => {
    // Create test markdown file
    writeFileSync(testMarkdownFile, testMarkdownContent);
  });

  test.afterEach(() => {
    // Clean up test files
    if (existsSync(testMarkdownFile)) {
      unlinkSync(testMarkdownFile);
    }
  });

  test('should convert markdown file to HTML successfully', async () => {
    const { stdout, stderr } = await execAsync(`node src/convert.js ${testMarkdownFile}`);

    expect(stderr).toBe('');
    expect(stdout).toContain('<h1>Test Article</h1>');
    expect(stdout).toContain('<strong>test</strong>');
    expect(stdout).toContain('<ul>');
    expect(stdout).toContain('<blockquote>');
    expect(stdout).toContain(
      '<pre><code class="language-javascript">console.log(\'Hello World\');',
    );
    expect(stdout).toContain('</code></pre>');
  });

  test('should show usage message when no file provided', async () => {
    try {
      await execAsync('node src/convert.js');
      throw new Error('Should have thrown an error');
    } catch (error: any) {
      expect(error.code).toBe(1);
      expect(error.stderr).toContain('Usage: convert <markdown-file>');
      expect(error.stdout).toBe('');
    }
  });

  test('should handle non-existent file gracefully', async () => {
    try {
      await execAsync('node src/convert.js non-existent-file.md');
      throw new Error('Should have thrown an error');
    } catch (error: any) {
      expect(error.code).toBe(1);
      expect(error.stderr).toContain('Error:');
      expect(error.stdout).toBe('');
    }
  });

  test('should process frontmatter correctly', async () => {
    const frontmatterContent = `---
title: CLI Test
author: Test Author
---

# Main Content

This is the main content after frontmatter.`;

    writeFileSync('test-frontmatter.md', frontmatterContent);

    try {
      const { stdout, stderr } = await execAsync('node src/convert.js test-frontmatter.md');

      expect(stderr).toBe('');
      expect(stdout).not.toContain('title: CLI Test');
      expect(stdout).toContain('<h1>Main Content</h1>');
      expect(stdout).toContain('main content after frontmatter');
    } finally {
      if (existsSync('test-frontmatter.md')) {
        unlinkSync('test-frontmatter.md');
      }
    }
  });

  test('should handle empty markdown file', async () => {
    writeFileSync('test-empty.md', '');

    try {
      const { stdout, stderr } = await execAsync('node src/convert.js test-empty.md');

      expect(stderr).toBe('');
      expect(stdout).toBe('');
    } finally {
      if (existsSync('test-empty.md')) {
        unlinkSync('test-empty.md');
      }
    }
  });
});
