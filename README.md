<h1 align="center">Cypress GitHub API Testing Project</h1>

<p align="center">
  This project demonstrates how to use Cypress for testing the GitHub API. It includes tests for verifying GitHub’s public endpoints, such as fetching user repositories, and mocking responses to simulate various scenarios. The setup uses best practices for securely handling sensitive data and integrates a customizable Cypress testing environment.
</p>

## Project Setup

### Prerequisites

<ul>
  <li><strong>Node.js</strong>: Ensure you have Node.js installed (v12 or higher recommended).</li>
  <li><strong>Cypress</strong>: Install Cypress via npm.</li>
</ul>

### Installation

<ol>
  <li><strong>Clone the Repository</strong></li>

  ```bash
  git clone https://github.com/rajendran12/skill_assessment.git
  cd skill_assessment
```

<ol>
  <li><strong>Install Dependencies</strong></li>
  
npm install
  
  
<li><strong>Set Up Environment Variables</strong></li> <ul> <li>Create a <code>.env</code> file in the project root to securely store API keys and tokens:</li>
css
Copy code
```plaintext
GITHUB_API_KEY=your_api_key_here

<li>Add <code>.env</code> to <code>.gitignore</code> to avoid committing sensitive data.</li>
</ul> </ol>

### Configuration
<ol>
  <li><strong>Cypress Configuration</strong></li>
  
Configure environment variables in cypress.config.js:

  ```bash
  // cypress.config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: {
    apiKey: process.env.GITHUB_API_KEY,
  },
};
```

### Mocking API Responses
<p>We use <code>cy.intercept()</code> to mock network responses and simulate success and error scenarios for GitHub’s public API endpoints. Mocking makes tests more reliable by avoiding dependencies on live API responses.</p>

### Running Tests
<ol> <li><strong>Run Tests in Headless Mode</strong></li>
  
  npx cypress run

<li><strong>Run Tests with Cypress Test Runner</strong></li>

npx cypress open

### Folder Structure
<ul> <li><code>cypress/integration</code>: Contains all test files.</li> <li><code>cypress/support</code>: Holds reusable functions and page objects for structured, reusable code.</li> <li><code>cypress/fixtures</code>: Stores JSON mock data for simulating API responses.</li> </ul>

### Test Scenarios

The tests include:

<ol> <li><strong>Fetch Repositories for a User</strong>: Validates that repositories are fetched and displayed correctly.</li> <li><strong>Mocked Success Response</strong>: Mocks a successful response to simulate expected data.</li> <li><strong>Error Scenarios</strong>: Simulates and validates behavior for API errors (e.g., 404 Not Found, 500 Server Error).</li> </ol>

### Environment Variables

<ul> <li><strong>Secure Handling</strong>: Store sensitive data, like API keys, in environment variables (<code>.env</code> file) rather than hardcoding them.</li> <li><strong>CI/CD Integration</strong>: Add sensitive data securely in CI/CD environments, such as GitHub Actions or Jenkins, using each platform’s secret management tools.</li> </ul>

### Generating Reports
<p>Use <a href="https://github.com/adamgruber/mochawesome">Mochawesome</a> to generate test reports:</p> <ol> <li><strong>Install Mochawesome</strong></li>

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```  
<li><strong>Configure Cypress to Use Mochawesome</strong></li>
Update <code>cypress.config.js</code>:

```bash
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
});
```
<li><strong>Run Tests and Generate Report</strong></li>

```bash
npx cypress run
npx mochawesome-merge cypress/reports/*.json > cypress/reports/combined-report.json
npx mochawesome-report-generator cypress/reports/combined-report.json
```
</ol>

### Contributing
<ol> <li>Fork the repository.</li> <li>Create a new branch (<code>feature/my-new-feature</code>).</li> <li>Commit your changes.</li> <li>Push to the branch and open a pull request.</li> </ol>

### License
<p>This project is licensed under the MIT License.</p> 
