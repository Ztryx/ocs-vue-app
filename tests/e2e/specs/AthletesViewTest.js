describe('Athletes View Test', () => {
  it('Retrieves elements from API', () => {
    cy.visit('/athletes');
    cy.contains('h1', 'Olympic Athletes');
    cy.contains('h2', 'Pyeongchang 2018');
    cy.contains('h2', 'Rio de Janeiro 2016');
  });
  it('Retrieves elements from API with Athletes per Game', () => {
    cy.visit('/athletes');
    cy.contains('span', 'Michael Phelps');
  });
  it('More button pagination works', () => {
    cy.visit('/athletes');
    cy.get('.more-container button').click();
    cy.contains('h2', 'Atlanta 1996');
  });
});
