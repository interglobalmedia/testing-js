describe('anonymous calculator', () => {
    it('can make calculations', () => {
        cy.visit('/')
            .getByText(/^1$/)
            .click()
            .getByText(/^\+$/)
            .click()
            .getByText(/^2$/)
            .click()
            .getByText(/^=$/)
            .click()
            .getByTestId('total')
            .should('have.text', '3')
    })
})
