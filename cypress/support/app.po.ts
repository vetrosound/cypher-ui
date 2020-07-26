
export class AppPage {
  navigateTo() {
    cy.visit('/');
  }

  getTitleText() {
    return cy.get('app-root .content span');
  }
}
