// Question number 5: Hiding and showings  elements
// this test suite automate the visibilty toggle of  
// an element and validate its state  
describe('Hiding and Showing Elements', () => {

  it('should hide and show the text box', () => {
    cy.visit('https://www.letskodeit.com/practice');
    // clicking on the hide button and validte that the text box is hidden 
    cy.get('#hide-textbox').click();
    // verifying through assertion  text box is hidden
    cy.get('#displayed-text').should('not.be.visible');
    //clicking on the show button and validate that the text box is visible 
    cy.get('#show-textbox').click();
      // verifying through assertion  text box is showing
    cy.get('#displayed-text').should('be.visible');
  });
});
