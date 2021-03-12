
describe('Register script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')

    })

    it('Register form with invalid password length', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('test')
        cy.get('[for=confirmPassword]').type('test')
        cy.contains('button', 'Register').click()
        //validation check for password length
        cy.contains("InvalidParameter: 1 validation error(s) found.").should('be.visible')
        cy.contains("- minimum field size of 6, SignUpInput.Password.").should('be.visible')

    })

    it('Register form with invalid password do not match', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('test')
        cy.get('[for=confirmPassword]').type('test@1')
       //validation check for password do not match
        cy.contains("Passwords do not match").should('be.visible')

    })
    it('register form with invalid password not long enough', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('tes@12')
        cy.get('[for=confirmPassword]').type('tes@12')
        cy.contains('button', 'Register').click()
        //validation check for password policy length
        cy.contains("InvalidPasswordException: Password did not conform with policy: Password not long enough").should('be.visible')
        

    })
    it('register form with invalid password uppercase', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('test!123')
        cy.get('[for=confirmPassword]').type('test!123')
        cy.contains('button', 'Register').click()
        //validation check for password policy uppercase
        cy.contains("InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters").should('be.visible')
        

    })
    it('register form with invalid password special symbol', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('est')
        cy.get('[for=password]').type('Test1234')
        cy.get('[for=confirmPassword]').type('Test1234')
        cy.contains('button', 'Register').click()
        //validation check for password special symbols
        cy.contains("InvalidPasswordException: Password did not conform with policy: Password must have symbol characters").should('be.visible')
        

    })
    it('register form with invalid password lowercase', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('TESTS!23')
        cy.get('[for=confirmPassword]').type('TESTS!23')
        cy.contains('button', 'Register').click()
        //validation check for password lowercase
        cy.contains("InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters").should('be.visible')
        

    })

    it('register form mandatory fields', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test').clear()
        cy.contains('Login is required').should('be.visible')
        cy.get('input[name=firstName]').type('test').clear()
        cy.contains('First Name is required').should('be.visible')
        cy.get('input[name=lastName]').type('test').clear()
        cy.contains('First Name is required').should('be.visible')
        cy.get('#password').type('wer').clear()
        cy.contains('Password is required').should('be.visible')
        cy.get('#confirmPassword').type('wer').clear()
        cy.contains('Passwords do not match').should('be.visible')
        

    })
    it('register form with invalid password user already exist', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('t')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('T@12estt')
        cy.get('[for=confirmPassword]').type('T@12estt')
        cy.contains('button', 'Register').click()
        cy.contains('UsernameExistsException: User already exists').should('be.visible')

    })


    it('register form with valid password parameter', function () {
        

        cy.contains('a', 'Register').click()
        cy.generateRandomString(10).then(username =>{
            cy.get(this.data.selector.inputUsername).type(username)
        })
        cy.generateRandomString(10).then(firstname =>{
            cy.get(this.data.selector.inputFirstname).type(firstname)

        })
        cy.generateRandomString(10).then(lastname =>{
            cy.get(this.data.selector.inputLastname).type(lastname)
        })
        cy.get(this.data.selector.inputPassword).type(this.data.register.password)
        cy.get(this.data.selector.inputConfirmpassword).type(this.data.register.password)
        cy.contains('button', 'Register').click()
        cy.contains('Registration is successful').should('be.visible')
        cy.contains('a', 'Cancel').click()
        cy.contains('a','Buggy Rating').should('be.visible')
        

    })
})
