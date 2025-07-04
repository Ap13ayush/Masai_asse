// Question Number 1: Dropdown Interaction;
//writing desribe block to interact with the 
// dropdown menu and verify the selected value 

describe('Dropdown Interaction', () => {
  it('should select Honda from the dropdown', () => {
    cy.visit('https://www.letskodeit.com/practice');
    cy.get('#carselect').select('honda');
    // assertion to check selecting honda prefectly 
    cy.get('#carselect').should('have.value', 'honda');
  });
});
