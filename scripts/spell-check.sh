#!/bin/bash
# Spell check commit messages and common files

set -e

echo "🔍 Running spell check on commit message..."

if [ -f "commit.tmp" ]; then
    echo "Checking commit.tmp..."
    # Force spell check by creating a markdown file temporarily
    cp commit.tmp commit.tmp.md
    npx cspell commit.tmp.md --show-suggestions --no-progress || {
        echo "❌ Spelling errors found in commit message!"
        rm -f commit.tmp.md
        exit 1
    }
    rm -f commit.tmp.md
    echo "✅ Commit message spell check passed!"
else
    echo "⚠️  No commit.tmp file found"
fi

echo "🔍 Running general spell check..."
npm run spellcheck || {
    echo "❌ Spelling errors found in project files!"
    exit 1
}

echo "✅ All spell checks passed!"