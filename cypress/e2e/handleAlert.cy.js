// Question number = 4: Handling Alerts 
// this test suite verify  alert window pop and closing of alert window ;
describe('Handling Alerts', () => {

  it('should trigger and validate an alert', () => {
    cy.visit('https://www.letskodeit.com/practice');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });
    
    cy.get('#alertbtn').click();
  });
});
