# MVP Epic: Core Conversion Engine

## Description

Implement the fundamental conversion engine that transforms dev.to markdown articles into Coder Legion-compatible HTML with inline CSS styling.

## Scope

- Fetch articles from dev.to API using article URLs
- Parse markdown content using unified.js ecosystem (remark-gfm)
- Convert to HTML with Coder Legion platform constraints
- Apply inline CSS styling (no external stylesheets allowed)
- Handle common markdown elements (headers, lists, code blocks, images, links)

## Definition of Done

- [ ] Dev.to API integration retrieves article metadata and content
- [ ] Markdown parsing handles GitHub Flavored Markdown syntax
- [ ] HTML output contains only inline CSS (no external dependencies)
- [ ] All core markdown elements render correctly in Coder Legion
- [ ] Error handling for invalid URLs and API failures
- [ ] Output includes required attribution signature
- [ ] Manual testing validates CSS compatibility with Coder Legion

## Key Technical Requirements

- **Inline CSS only**: Coder Legion requires all styling in style attributes
- **Attribution**: Include "Verdent Deck <verdent_deck@codeck.ai>" signature
- **Error handling**: Graceful degradation for API failures
- **Content fidelity**: Preserve formatting and structure from original

## Git Commit Strategy

1. **Setup unified.js pipeline** - Basic markdown parsing infrastructure
2. **Dev.to API integration** - Article fetching and metadata extraction
3. **HTML generation** - Convert parsed markdown to HTML structure
4. **Inline CSS styling** - Apply styling constraints for Coder Legion
5. **Error handling** - Add validation and error recovery
6. **Attribution system** - Include required signature generation
7. **Testing and validation** - Manual testing with sample articles

## Dependencies

- Interface Technology Decision (ADR-001) - React + Material-UI foundation
- Deployment strategy - Affects build process and API handling

## Success Metrics

- Successfully converts common dev.to article types
- Generated HTML displays correctly in Coder Legion preview
- Processing time under 5 seconds for typical articles
- Error rate under 5% for valid dev.to URLs

Generated with AI assistance (Verdent Deck <verdent_deck@codeck.ai>) - Human oversight applied
