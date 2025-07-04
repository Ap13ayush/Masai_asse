// Question Number 2: Radio Button Selection
// writing test cases interact with radio buttons 
// and validate the selected options 

describe('Radio Button Selection', () => {
  it('should select the BMW radio button', () => {
    
    cy.visit('https://www.letskodeit.com/practice');
    cy.get('#bmwradio').check();
    // checking assertion to right radio button checked ;

    cy.get('#bmwradio').should('be.checked');
  });
});
