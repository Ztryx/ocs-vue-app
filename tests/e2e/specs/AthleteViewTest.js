describe('Athlete View Test', () => {
  it('View for Athlete is working', () => {
    cy.visit('/athletes');
    cy.get('div.athlete-bottom-card').first().click();
    cy.contains('h1', 'Athlete Arianna Fontana');
    cy.contains('p', 'Pyeongchang 2018');
    cy.contains('p', 'Sochi 2014');
    cy.contains('p', 'Vancouver 2010');
    cy.contains('p', 'Turin 2006');
  });
  it('Markdown conversion is working', () => {
    cy.visit('/athletes');
    cy.get('div.athlete-bottom-card').first().click();
    cy.contains('h1', 'Athlete Arianna Fontana');
    cy.contains('p', 'Fontana started skating at the age of four, following in the footsteps of her brother Alessandro, ' +
      'initially on roller skates before switching to ice skating. She first trained in Lanzada until the rink there closed, when she switched her training base to Bormio.');
  });
});
