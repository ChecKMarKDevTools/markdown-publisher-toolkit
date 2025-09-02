/**
 * CSS-to-inline converter for Coder Legion compatibility
 */
export class InlineCSSProcessor {
  /**
   * Convert CSS in <style> tags to inline styles
   * This is required for Coder Legion which doesn't support external CSS
   */
  public inlineCSS(html: string): string {
    // Extract CSS from style tags
    const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let cssRules: string[] = [];

    html = html.replace(styleTagRegex, (_, cssContent) => {
      cssRules.push(cssContent);
      return ''; // Remove the style tag
    });

    if (cssRules.length === 0) {
      return html;
    }

    // Parse CSS rules
    const parsedRules = this.parseCSSRules(cssRules.join('\n'));

    // Apply inline styles
    return this.applyInlineStyles(html, parsedRules);
  }

  /**
   * Parse CSS rules into selector-property pairs
   */
  private parseCSSRules(css: string): Map<string, Record<string, string>> {
    const rules = new Map<string, Record<string, string>>();

    // Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');

    // Split by rules (roughly)
    const ruleMatches = css.match(/[^{}]*\{[^{}]*\}/g) || [];

    for (const ruleMatch of ruleMatches) {
      const selectorEndIndex = ruleMatch.indexOf('{');
      if (selectorEndIndex === -1) continue;

      const selector = ruleMatch.substring(0, selectorEndIndex).trim();
      const properties = ruleMatch
        .substring(selectorEndIndex + 1, ruleMatch.lastIndexOf('}'))
        .trim();

      const parsedProperties = this.parseProperties(properties);

      // Handle multiple selectors (comma-separated)
      const selectors = selector.split(',').map((s) => s.trim());

      for (const sel of selectors) {
        rules.set(sel, { ...rules.get(sel), ...parsedProperties });
      }
    }

    return rules;
  }

  /**
   * Parse CSS properties string into object
   */
  private parseProperties(properties: string): Record<string, string> {
    const props: Record<string, string> = {};

    const declarations = properties.split(';').filter((d) => d.trim());

    for (const declaration of declarations) {
      const colonIndex = declaration.indexOf(':');
      if (colonIndex === -1) continue;

      const property = declaration.substring(0, colonIndex).trim();
      const value = declaration.substring(colonIndex + 1).trim();

      if (property && value) {
        props[property] = value;
      }
    }

    return props;
  }

  /**
   * Apply inline styles to HTML elements
   */
  private applyInlineStyles(html: string, rules: Map<string, Record<string, string>>): string {
    // Convert CSS rules to inline styles for specific elements

    // Apply body styles
    if (rules.has('body')) {
      const bodyStyles = rules.get('body')!;
      html = this.applyStylesToTag(html, 'body', bodyStyles);
    }

    // Apply styles to elements with classes
    for (const [selector, styles] of rules.entries()) {
      if (selector.startsWith('.')) {
        const className = selector.substring(1);
        html = this.applyStylesToClass(html, className, styles);
      } else if (selector.includes('.')) {
        // Handle compound selectors like .article-content h1
        const parts = selector.split(/\s+/);
        const lastPart = parts[parts.length - 1];

        if (lastPart.startsWith('.')) {
          const className = lastPart.substring(1);
          html = this.applyStylesToClass(html, className, styles);
        } else if (parts.length > 1 && parts[0].startsWith('.')) {
          // Apply to nested elements
          html = this.applyStylesToNestedElements(html, selector, styles);
        }
      }
    }

    return html;
  }

  /**
   * Apply styles to HTML tag
   */
  private applyStylesToTag(html: string, tagName: string, styles: Record<string, string>): string {
    const styleString = this.objectToStyleString(styles);
    if (!styleString) return html;

    const tagRegex = new RegExp(`<${tagName}([^>]*)>`, 'gi');

    return html.replace(tagRegex, (_, attributes) => {
      const existingStyle = this.extractExistingStyle(attributes);
      const mergedStyle = this.mergeStyles(existingStyle, styleString);

      // Remove existing style attribute and add new one
      const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
      const separator = cleanAttributes ? ' ' : '';

      return `<${tagName}${separator}${cleanAttributes} style="${mergedStyle}">`;
    });
  }

  /**
   * Apply styles to elements with specific class
   */
  private applyStylesToClass(
    html: string,
    className: string,
    styles: Record<string, string>,
  ): string {
    const styleString = this.objectToStyleString(styles);
    if (!styleString) return html;

    // Match elements with the class
    const classRegex = new RegExp(
      `<([^>\\s]+)([^>]*?)class\\s*=\\s*["']([^"']*\\b${className}\\b[^"']*)["']([^>]*?)>`,
      'gi',
    );

    return html.replace(classRegex, (_, tagName, beforeClass, classValue, afterClass) => {
      const attributes = beforeClass + afterClass;
      const existingStyle = this.extractExistingStyle(attributes);
      const mergedStyle = this.mergeStyles(existingStyle, styleString);

      // Remove existing style attribute
      const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
      const separator = cleanAttributes ? ' ' : '';

      return `<${tagName}${separator}${cleanAttributes} class="${classValue}" style="${mergedStyle}">`;
    });
  }

  /**
   * Apply styles to nested elements (basic implementation)
   */
  private applyStylesToNestedElements(
    html: string,
    selector: string,
    styles: Record<string, string>,
  ): string {
    // This is a simplified implementation
    // For a full CSS selector engine, we'd need a more sophisticated parser

    const styleString = this.objectToStyleString(styles);
    if (!styleString) return html;

    // Handle simple cases like ".article-content h1"
    if (selector.includes(' h1')) {
      const tagRegex = /<h1([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<h1${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    // Similar for h2, h3, etc.
    if (selector.includes(' h2')) {
      const tagRegex = /<h2([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<h2${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    if (selector.includes(' h3')) {
      const tagRegex = /<h3([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<h3${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    // Handle other common selectors as needed
    if (selector.includes(' blockquote')) {
      const tagRegex = /<blockquote([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<blockquote${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    if (selector.includes(' pre')) {
      const tagRegex = /<pre([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<pre${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    if (selector.includes(' code')) {
      const tagRegex = /<code([^>]*)>/gi;
      html = html.replace(tagRegex, (_, attributes) => {
        const existingStyle = this.extractExistingStyle(attributes);
        const mergedStyle = this.mergeStyles(existingStyle, styleString);

        const cleanAttributes = attributes.replace(/style\s*=\s*["'][^"']*["']/gi, '').trim();
        const separator = cleanAttributes ? ' ' : '';

        return `<code${separator}${cleanAttributes} style="${mergedStyle}">`;
      });
    }

    return html;
  }

  /**
   * Extract existing style attribute value
   */
  private extractExistingStyle(attributes: string): string {
    const styleMatch = attributes.match(/style\s*=\s*["']([^"']*)["']/i);
    return styleMatch ? styleMatch[1] : '';
  }

  /**
   * Convert style object to CSS string
   */
  private objectToStyleString(styles: Record<string, string>): string {
    return Object.entries(styles)
      .map(([property, value]) => `${property}: ${value}`)
      .join('; ');
  }

  /**
   * Merge existing styles with new styles
   */
  private mergeStyles(existingStyle: string, newStyle: string): string {
    if (!existingStyle) return newStyle;
    if (!newStyle) return existingStyle;

    // Ensure proper separation
    const separator = existingStyle.endsWith(';') ? ' ' : '; ';
    return existingStyle + separator + newStyle;
  }
}

// Export singleton instance
export const inlineCSSProcessor = new InlineCSSProcessor();
