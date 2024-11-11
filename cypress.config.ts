// interface ReporterOptions {
//     reporterEnabled: string;
//     cypressMochawesomeReporterReporterOptions: {
//         reportDir: string;
//         charts: boolean;
//         reportPageTitle: string;
//         embeddedScreenshots: boolean;
//         inlineAssets: boolean;
//     };
//     mochaJunitReporterReporterOptions: {
//         mochaFile: string;
//     };
// }

const config = {
    e2e: {
        supportFile: false, // Disable the support file
        // baseUrl: "https://www.github.com",
        specPattern: 'cypress/integration/specs/*.ts', // Look for .cy.js or .cy.ts files in cypress/e2e

        defaultCommandTimeout: 30000,
        screenshotOnRunFailure: false, // Takes a screenshot on test failure
        screenshotsFolder: "cypress/screenshots",
        // reporter: "cypress-multi-reporters",
        // reporterOptions: {
        //     reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
        //     cypressMochawesomeReporterReporterOptions: {
        //         reportDir: "cypress/reports",
        //         charts: true,
        //         reportPageTitle: "My Test Suite",
        //         embeddedScreenshots: true,
        //         inlineAssets: true
        //     },
        //     mochaJunitReporterReporterOptions: {
        //         mochaFile: "cypress/reports/junit/results-[hash].xml"
        //     }
        // } as ReporterOptions,
        video: false
    }
};

export default config;
