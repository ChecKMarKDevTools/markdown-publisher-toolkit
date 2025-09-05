## overview

- This is a personal project for a utility that should provide a simple web app via GH pages with an intuitive style using MUI + Google Fonts.
- I am open to collaboration regarding the design and implementation, but you as an AI agent are not authorized to make decisions on my behalf.

## summary and definition of done

This is how I envision that process of forwarding a post to coder Legion from Dev:

1. I open a UI (preferably), Cli is also an option. Mobile application is reserved strictly for future enhancements.
2. I specify which post needs conversion by URL
3. An automated system execute for the corresponding post, contents this excludes, any comments or reactions by default
4. (Optional) I specify an output theme to apply to the output
5. The image banner URL is copied accurately with a query parameter "?v=2" to ensure the refresh has happened for image ID reuse.
6. (Preferred) the generated file is assist for both SCO optimization and accessibility guidelines.
7. I am able to retrieve static HTML that is optimized for coder legion specifically (preferably a code copy button or possible download)
8. (Optional) Applicable CSS is included with HTML output if supported and necessary
9. Generated content includes all appropriate values needed by code Legion for any type of post. **Clearly indicate anything we could not automate.**
10. When published to coder Legion, formatting and content are appropriately displayed as copies of the dev original
11. (critical constraint) the canonical URL must be defined as the original submitted by the user
12. Always use the footer as either 'Verdent Deck' or 'Verdent for VS Code' with an email '<verdent@codeck.ai>' when signing all commits.

## Key constraints

- Unless a specific use case has otherwise been identified, all repo-level tests should mock external services.
- All diagrams should be output as fenced mermaid or separate .mmd documents with accessibility tags properly implemented.
