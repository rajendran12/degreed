import {githubLandingPage} from "../../support/page-objects/github-landingpage.page";

describe("GitHub Homepage Tests", () => {
    beforeEach(() => {
        cy.visit('https://github.com'); // github landing page
        cy.viewport(1280, 720); // full screen
    });

    it("should display the GitHub logo", () => {
        // Check if the GitHub logo is visible
        githubLandingPage.verifyGithubIconIsVisible();
    });

    it('should navigate to the sign-up page when "Sign up" button is clicked', () => {

        // Find and click the "Sign up" button
        cy.contains('a', 'Sign up').click();

        // Assert that the URL includes 'signup'
        cy.url().should('include', '/signup');

        // Validate if the sign up page has correct title
        cy.title().should('include', 'Join GitHub');
    });

    it("should navigate correctly when menu links are clicked", () => {
        // Array of menu items and their expected URLs
        const menuLinks = [
            { label: "Pricing", href: "/pricing" },
        ];
        // Iterate through each menu link to verify its navigation
        menuLinks.forEach((link) => {
            // Find the link by its label and click and verify the URL
            cy.contains("header", link.label)
                .should("be.visible")
                .click();

            // Verify that the URL is correct after the click
            cy.url().should("include", link.href);

            // Navigate back to the homepage to reset for the next link check
            cy.go("back");
        });
    });
});