// question 3: checkbox validation 
// this test suite to check interact with chcekboxes and assert their states;


describe('Checkbox Validation', () => {
  it('should check the Benz checkbox and validate its state', () => {

    cy.visit('https://www.letskodeit.com/practice');

    // verifying  that the benz checkbox is checked
    cy.get('#benzcheck').check();
    cy.get('#benzcheck').should('be.checked');

    // unchecking the benz chcekbox and validate its state.
    cy.get('#benzcheck').uncheck();
    cy.get('#benzcheck').should('not.be.checked');
  });
});
