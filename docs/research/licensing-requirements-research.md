# Licensing Requirements Research

## User Requirements

- Allow: use, copy, fork, build on, internalize, externalize, share
- Prevent: commercial profit above the original author
- Not traditional open source - source available with commercial restrictions

## License Options Analysis

### 1. Business Source License (BSL 1.1) ⭐ RECOMMENDED

**How it works**:

- Source code available for non-commercial use
- Commercial use requires separate license or permission
- Can include "Additional Use Grant" for specific commercial circumstances
- Typically converts to open source after specified time period

**Benefits**:

- Widely recognized and legally tested
- Used by companies like MariaDB, CockroachDB
- Clear commercial protection mechanism
- Flexible "Additional Use Grant" system

**Example BSL Grant**: "You may use the Licensed Work for any non-commercial purpose"

### 2. Creative Commons NonCommercial (CC BY-NC)

**How it works**:

- Allows sharing and adaptation for non-commercial purposes only
- Requires attribution
- Commercial use requires separate permission

**Limitations**:

- Not designed for software (intended for creative works)
- Unclear definition of "commercial" in software context
- May conflict with software distribution practices

### 3. Fair Source License

**How it works**:

- Source available with usage limitations
- Typically limits number of users or organization size
- Commercial use beyond limits requires license

**Example**: "Usage is limited to organizations with fewer than X users"

### 4. Elastic License v2 (ELv2)

**How it works**:

- Prohibits offering as managed service
- Prohibits circumventing license key/access controls
- Otherwise allows most usage including commercial

**Limitations**:

- More focused on preventing service competition
- May allow commercial use that competes with author

### 5. Custom Source-Available License

**How it works**:

- Tailored license specifically for your requirements
- Can precisely define commercial restrictions
- Requires legal review for enforceability

## Recommendation

**Business Source License (BSL 1.1)** with custom Additional Use Grant:

```
Additional Use Grant: You may use the Licensed Work for any
non-commercial purpose. Commercial use requires written
permission from the licensor.
```

**Rationale**:

- Proven legal framework
- Clear commercial protection
- Recognized by legal and developer communities
- Allows future conversion to open source if desired
- Flexibility for case-by-case commercial permissions

## Implementation Notes

- Include clear contact information for commercial licensing requests
- Define "commercial use" clearly in documentation
- Consider time-based conversion to open source (e.g., 3-4 years)
- Legal review recommended before finalization

Generated with AI assistance (Verdent Deck <verdent_deck@codeck.ai>) - Human oversight applied
