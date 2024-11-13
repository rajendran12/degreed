describe('Mock API Response Example', () => {
  it('should mock a successful API response', () => {
    // Define mock data for a successful response
    const mockResponse = { id: 1, name: "Mocked Item", status: "available" };

    // Intercept the request to the API endpoint and provide a mock response
    cy.intercept("GET", "/api/data", {
      statusCode: 200,
      body: mockResponse,
    }).as("getData");

    // Trigger the API call in your application
    cy.visit("/rajendran12"); // Replace with the relevant page or action in your app

    // Wait for the mocked API response
    cy.wait("@getData");

    // Assert that the mock data appears on the page
    cy.contains("Mocked Item").should("be.visible");
  });
});
