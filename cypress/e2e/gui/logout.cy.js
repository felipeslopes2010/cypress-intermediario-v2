describe('Logout', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('/');
    })
    it('Realiza Logout com Sucesso', () => {
        cy.logout();

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`);
    });
});