/* global cy, describe, it */

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.wait(2000);
    cy.contains('type').click();
    cy.wait(2000);

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('titityyy')
      .should('have.value', 'titityyy');            
    
  });
});
    

