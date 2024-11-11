class GithubLandingPage {
    githubIcon = '*[class^="octicon octicon-mark-github"]';
// Method to check if the GitHub icon is visible
    verifyGithubIconIsVisible() {
        cy.get(this.githubIcon).should("be.visible");
    }
}
// Export an instance of the GithubLandingPage class
export const githubLandingPage = new GithubLandingPage();