/// <reference types="Cypress" />

 

describe('User Profile script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')
        

    })
  
    it('Update user profile without updating any details', function () {
        
        cy.get(this.data.selector.inputLogin).type(this.data.register.username)
        cy.get(this.data.selector.inputPswd).type(this.data.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        

    })
    it.only('Update user profile additional details', function () {
        
        cy.get(this.data.selector.inputLogin).type(this.data.register.username)
        cy.get(this.data.selector.inputPswd).type(this.data.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.get('#gender').type(this.data.register.gender)
        cy.get('#age').type(this.data.register.age)
        cy.get('#address').type(this.data.register.address)
        cy.get('#hobby').select(this.data.register.hobby)
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        cy.get('#gender').clear()
        cy.get('#age').clear()
        cy.get('#address').clear()
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        
    })
    
    it('Update user profile with invalid current password', function () {
        
        cy.get(this.data.selector.inputLogin).type(this.data.register.username)
        cy.get(this.data.selector.inputPswd).type(this.data.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.get('#currentPassword').type('T@sts123')
        cy.get('#newPassword').type('T@sts145')
        cy.get('#newPasswordConfirmation').type('T@sts145')
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('NotAuthorizedException: Incorrect username or password').should('be.visible')
        
    })
})
