/// <reference types="Cypress" />

 

describe('Login script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')
        

    })
  
    it('Login with valid user', function () {
        
        cy.get(this.data.selector.inputLogin).type(this.data.register.username)
        cy.get(this.data.selector.inputPswd).type(this.data.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('li', 'Hi', + this.data.register.firstname ).should('be.visible')
        cy.contains('a', 'Logout').click()

    })
    it('Login with invalid user', function () {
        
        cy.generateRandomString(10).then(user => {
        cy.get(this.data.selector.inputLogin).type(user) })
        cy.generateRandomString(10).then(psd => {
            cy.get(this.data.selector.inputPswd).type(psd) })
        cy.contains('button', 'Login').click()
        cy.contains('Invalid username/password').should('be.visible')
        
    })
    
})
