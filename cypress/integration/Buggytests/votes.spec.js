/// <reference types="Cypress" />

 

describe('Votes script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')
        

    })
  
    it('Navigate to popular make', function () {
        
        cy.contains('h2','Popular Model').should('be.visible')
        cy.get('[src="/img/cars/Lamborghini-Logo.png"]').click()
        cy.scrollTo('center')
        cy.contains('a', 'Model').should('be.visible')
        cy.contains('a', 'Rank').should('be.visible')
        cy.contains('a', 'Votes').should('be.visible')
        cy.get('.comments').contains('Comments').should('be.visible')
        cy.contains('a', 'Diablo').click()
        cy.url().should('include', '/model')
        cy.contains('You need to be logged in to vote.').should('be.visible')
        cy.get('[src="/img/cars/Lamborghini-Logo.png"]').click()
        cy.url().should('include', '/make')
        
    })

    it('Navigate to popular model', function () {
        
        cy.contains('h2','Popular Make').should('be.visible')
        cy.get('[src="/img/cars/Diablo.jpg"]').click()
        cy.contains('th', 'Date').should('be.visible')
        cy.contains('th', 'Author').should('be.visible')
        cy.contains('th', 'Comment').should('be.visible')
        cy.url().should('include', '/model')
        cy.contains('You need to be logged in to vote.').should('be.visible')
        cy.get('[src="/img/cars/Diablo.jpg"]').click()
        cy.url().should('eql','https://buggy.justtestit.org/')

        
    })
    

    it('Navigate to overall rating', function () {
        
        cy.contains('h2','Overall Rating').should('be.visible')
        cy.get('[src="/img/overall.jpg"]').click()
        cy.url().should('include', '/overall')
        cy.contains('a', 'Model').should('be.visible')
        cy.contains('a', 'Rank').should('be.visible')
        cy.contains('a', 'Votes').should('be.visible')
        cy.contains('a', 'Engine').should('be.visible')
        cy.get('.comments').contains('Comments').should('be.visible')
        cy.contains('Lamborghini').click()
        cy.url().should('include', '/make')
        
        
    })

    it('Check vote button enabled only when user logged in and not voted earlier', function () {
        
        
        cy.get(this.data.selector.inputLogin).type(this.data.register.username)
        cy.get(this.data.selector.inputPswd).type(this.data.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('h2','Overall Rating').should('be.visible')
        cy.get('[src="/img/overall.jpg"]').click()
        cy.url().should('include', '/overall')
        cy.contains('a', 'View more').click()
        cy.contains('button', 'Vote').should('be.visible')
   
      
    })

    
})
