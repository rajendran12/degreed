**Cypress GitHub Github Testing Project**

This project demonstrates how to use Cypress for testing the GitHub API. It includes tests for verifying GitHub’s public endpoints, such as fetching user repositories, and mocking responses to simulate various scenarios. The setup uses best practices for securely handling sensitive data and integrates a customizable Cypress testing environment.

**Project Setup**

Prerequisites

Ensure you have Node.js installed (v12 or higher recommended).

Cypress: Install Cypress via npm.

**Installation**

Clone the Repository

git clone https://github.com/rajendran12/skill_assessment.git

cd skill_assessment

Install Dependencies

npm install

Set Up Environment Variables


Create a .env file in the project root to securely store API keys and tokens:

GITHUB_API_KEY=your_api_key_here
Add .env to .gitignore to avoid committing sensitive data.
Configuration
Cypress Configuration
Configure environment variables in cypress.config.js:
// cypress.config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: {
    apiKey: process.env.GITHUB_API_KEY,
  },
};

**Mocking API Responses**

We use cy.intercept() to mock network responses and simulate success and error scenarios for GitHub’s public API endpoints. Mocking makes tests more reliable by avoiding dependencies on live API responses.

Running Tests
Run Tests in Headless Mode
npx cypress run
Run Tests with Cypress Test Runner

npx cypress open

**Folder Structure**

cypress/integration: Contains all test files.
cypress/support: Holds reusable functions and page objects for structured, reusable code.
cypress/fixtures: Stores JSON mock data for simulating API responses.
Test Scenarios

The tests include:

Fetch Repositories for a User: Validates that repositories are fetched and displayed correctly.
Mocked Success Response: Mocks a successful response to simulate expected data.
Error Scenarios: Simulates and validates behavior for API errors (e.g., 404 Not Found, 500 Server Error).
Environment Variables
Secure Handling: Store sensitive data, like API keys, in environment variables (.env file) rather than hardcoding them.
CI/CD Integration: Add sensitive data securely in CI/CD environments, such as GitHub Actions or Jenkins, using each platform’s secret management tools.

**Generating Reports**

Use Mochawesome to generate test reports:

Install Mochawesome
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
Configure Cypress to Use Mochawesome Update cypress.config.js:

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
});

**Run Tests and Generate Report**

npx cypress run

npx mochawesome-merge cypress/reports/*.json > cypress/reports/combined-report.json
npx mochawesome-report-generator cypress/reports/combined-report.json

**Contributing**

Fork the repository.
Create a new branch (feature/my-new-feature).
Commit your changes.
Push to the branch and open a pull request.

**License**

This project is licensed under the MIT License.
