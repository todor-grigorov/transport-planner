describe('General Trip List Page test', () => {
  beforeEach(() => {
    cy.visit('/connections?departure=Basel&destination=Zurich');
  });

  it('should render heading properly', () => {
    cy.get('h3').should('exist');
  });

  it('should click next button', () => {
    cy.get('button').eq(2).click();
  });

  it('should click next and previous button', () => {
    cy.get('button').eq(2).click();
    cy.get('button').eq(1).click();
  });

  it('should click next, previous and next button again', () => {
    cy.get('button').eq(2).click();
    cy.get('button').eq(1).click();
    cy.get('button').eq(2).click();
  });

  it('should click on View journey details button', () => {
    cy.get('a').eq(4).click();
  });

  it('should click on View journey details button and the click on BACK button', () => {
    cy.get('a').eq(4).click();
    cy.get('a').eq(3).click();
  });
});
