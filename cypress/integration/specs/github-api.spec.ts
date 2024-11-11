import * as https from 'https';
import * as url from "url";

describe('GitHub API Test', () => {

    it('should fetch repositories for a user', () => {
        // Define the GitHub username
        const username = 'rajendran12';

        // Make a request to GitHub's public API for repositories
        cy.request({
            method: 'GET',
            url:`https://api.github.com/users/rajendran12/repos`,
            headers: {
            'accept': 'application/vnd.github.v3+json',
        }
    }).then((response) => {
            // Assertions to validate the response
            expect(response.status).to.eq(200); // Status should be 200 OK

            // Additional check for repository details
            response.body.forEach((repo) => {
                expect(repo).to.have.property('html_url'); // Each repo should have a URL
            });
        });
    });


});