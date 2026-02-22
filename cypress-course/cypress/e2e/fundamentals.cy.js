describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('li.selected').should('have.length',3)
    
  })
})