describe('anonymous calculator', () => {
    it('can make calculations', () => {
        cy.visit('http://localhost:8080')
            .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(3)')
            .click()
            .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(4)')
            .click()
            .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(4)')
            .click()
            .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(5)')
            .click()
            // verify that we have 3
            .get('.mNQM6vIr72uG0YPP56ow5')
            .should('have.text', '3')
    })
})