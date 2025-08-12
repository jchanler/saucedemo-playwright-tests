# SauceDemo Playwright Tests

A simple Playwright TypeScript framework for testing the SauceDemo application.

## Setup

1. Use the correct Node.js version:
```bash
nvm use
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests with UI mode:
```bash
npm run test:ui
```

Run tests in debug mode:
```bash
npm run test:debug
```

View test results:
```bash
npm run report
```

## GitHub Actions

These tests run in GitHub Actions on every push or pr to `main` or you can kick off the workflow manually.

### Test Reports

The workflow generates multiple types of test reports:
- **GitHub Actions Reporter**: Test results are displayed directly in the GitHub Actions workflow summary
- **HTML Report**: Detailed test results with screenshots and traces (downloadable as artifact)
- **CTRF Report**: Common Test Report Format for integration with other tools and dashboards

All reports are automatically generated and made available through GitHub Actions artifacts when tests run in CI.

*Test reporting powered by [CTRF](https://ctrf.io) and [playwright-ctrf-json-reporter](https://github.com/ctrf-io/playwright-ctrf-json-reporter)*