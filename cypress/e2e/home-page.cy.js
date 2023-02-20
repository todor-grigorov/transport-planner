describe('Home Page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render heading properly', () => {
    cy.get('h1').should('exist');
  });

  it('should type in departure input', () => {
    cy.get('input').eq(0).type('Basel');
  });

  it('should type in destination input', () => {
    cy.get('input').eq(1).type('Zurich');
  });

  it('should type in destination input', () => {
    cy.get('input').eq(0).type('Basel');
    cy.get('input').eq(1).type('Zurich');
    cy.get('button').eq(1).click();
  });
});
