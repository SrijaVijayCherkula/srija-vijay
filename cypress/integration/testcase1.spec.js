describe('MyTestSuite', function() 
{
    it('Launch Website', function()
    {
        cy.visit('https://demo.nopcommerce.com/') //visit url
        cy.url().should('include','nopcommerce')  //verifyingg url
        cy.title().should('eq','nopCommerce demo store') //verifying title
        cy.get('.ico-register').click() //clicking element register and navigating to registration page
       
    })
    it('Registration', function()
    {
    
       // cy.get('.ico-register').click() //clicking element register and navigating to registration page
        cy.title().should('include','Register') //verifying page title
       
        cy.get('input[value=F]').should('be.visible').should('not.be.checked').click()//visibility checked
        cy.get('input[value=M]').should('be.visible').should('not.be.checked')
        cy.get('input[name=FirstName]').should('be.visible').should('be.enabled').type("Srija") //entering first name
        cy.get('input[name=LastName]').should('be.visible').should('be.enabled').type("Vijay")  //entering last name
        cy.get('select[name=DateOfBirthDay]').select('18').should('have.value','18') //selecting date of birth
        cy.get('select[name=DateOfBirthMonth]').select('September').should('have.value','9') 
        cy.get('select[name=DateOfBirthYear]').select('1997').should('have.value','1997') 

     })
     it('Registartion completion page', function()
    {
        cy.get('input[name=Email]').should('be.visible').should('be.enabled').type("cvk12345@gmail.com") //entering email
       
        cy.get('input[name=Password]').should('be.visible').should('be.enabled').type("Asd@1997") //entering password
        cy.get('input[name=ConfirmPassword]').should('be.visible').should('be.enabled').type("Asd@1997") //re-entering password
       
        cy.get('input[name=register-button]').should('be.visible').click()
        cy.title().should('include','Register')
        cy.get('.result').should('include','Your registration completed')

    })

})
