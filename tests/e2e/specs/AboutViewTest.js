describe('Athletes View Test', () => {
  it('About is accesible from Menu', () => {
    cy.visit('/');
    cy.get('button.v-app-bar__nav-icon.v-btn').click();
    cy.get('.v-item-group .v-list-item:last-child').click();
    cy.contains('h1', 'About Page');
  });
});
