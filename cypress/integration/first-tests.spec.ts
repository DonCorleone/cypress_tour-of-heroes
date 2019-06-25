describe('Our First Test', () => {

  it('It is my first test', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Tour of Heroes')
    // Check the H1 has the text "tour of Heroes"

    cy.get('[ng-reflect-router-link="/detail/11"] > .module').should('have.attr', 'class')
  })

})
