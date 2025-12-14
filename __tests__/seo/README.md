# SEO Metadata Tests

## Quick Start

```bash
# Install dependencies (first time only)
npm install

# Run SEO tests
npm run test:seo

# Run in watch mode (auto-rerun on changes)
npm run test:watch
```

## What These Tests Do

These tests validate that your SEO metadata remains consistent across all pages:

✅ **Titles** - Correct, unique, under 60 chars, contains "Surat"
✅ **Descriptions** - Accurate, 120-160 chars, keyword-rich
✅ **Canonical URLs** - Proper relative paths
✅ **Open Graph** - Social media tags with correct domain
✅ **Best Practices** - HTTPS, unique content, proper domain

## When to Run

- ✅ Before every deployment
- ✅ After editing any page metadata
- ✅ After changing domain or URLs
- ✅ Before merging PRs

## Expected Results

```
Test Suites: 1 passed, 1 total
Tests:       45 passed, 45 total
```

If all 45 tests pass, your SEO metadata is correct! 🎉

## If Tests Fail

1. **Read the error message** - It shows what changed
2. **Decide if intentional**:
   - Accidental change? → Revert your code
   - Intentional change? → Update the test in `metadata.test.ts`
3. **Re-run tests** to verify

## Tested Pages

- Home (`/`)
- About (`/about`)
- Portfolio (`/portfolio`)
- Contact (`/contact`)
- Destination Wedding (`/destination-wedding`)
- FAQ (`/faq`)
- Brands (`/brands`)

## Full Documentation

See [SEO_TESTING_GUIDE.md](../../SEO_TESTING_GUIDE.md) for complete details.
