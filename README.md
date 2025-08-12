# Saucedemo Playwright Tests

A simple Playwright TypeScript framework for testing the Swag Lags demo site at https://www.saucedemo.com/.

## Setup

1. Use the correct Node version:
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

- **HTML Report**: Detailed test results with screenshots and traces (downloadable as artifact)
- **CTRF Report**: An easy to read summary of the test results that shows up on each run in GitHub Actions

*Test reporting powered by [CTRF](https://ctrf.io) and [playwright-ctrf-json-reporter](https://github.com/ctrf-io/playwright-ctrf-json-reporter)*