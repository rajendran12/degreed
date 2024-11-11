describe('API Test with Secure Key', () => {
    it('uses API key from environment variables', () => {
        const apiKey = Cypress.env('apiKey');
        cy.request({
            method: 'GET',
            url: 'https://api.example.com/data',
            headers: { Authorization: Bearer ${apiKey} }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});