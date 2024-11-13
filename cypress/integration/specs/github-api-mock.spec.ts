describe('Mock GitHub API success response', () => {
    beforeEach(() => {
        const mockData = [
            {
                id: 1,
                name: "mock-repo",
                full_name: "octocat/mock-repo",
                private: false,
                html_url: "https://github.com/octocat/mock-repo",
                description: "This is a mock repository",
            },
            {
                id: 2,
                name: "another-mock-repo",
                full_name: "octocat/another-mock-repo",
                private: false,
                html_url: "https://github.com/octocat/another-mock-repo",
                description: "Another example of a mock repository",
            },
        ];

        cy.intercept("GET", "https://api.github.com/users/octocat/repos", {
            statusCode: 200,
            body: mockData,
        }).as("getUserRepos");
    });

    it("should display mock repositories on the page", () => {
        // trigger the API call in your app
        cy.visit("/rajendran12"); 

        // Wait for the mocked API response
        cy.wait("@getUserRepos");

        // Assert that the mock data is rendered on the page
        cy.get(".repo-list-item").should("have.length", 2);
        cy.contains("mock-repo").should("be.visible");
        cy.contains("another-mock-repo").should("be.visible");
    });
});
