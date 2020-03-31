describe('MyTestSuite', function() 
{
    it('Launch Connect QALive', function()
    {
        cy.visit("https://connectqalv.mheducation.com/connect/hmInstructorSectionHomePortal.do") //visit url
        cy.title().should('eq','McGraw-Hill Connect') //verifying title       
    })
    it('Login to Connect QALive', function()
    {
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("deva3ins@live.com") //entering User Name
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("123456") //entering password
        cy.get('#signinForm').submit()
    })
    it('Add Course', function()
    {
        cy.visit("https://connectqalv.mheducation.com/connect/hmInstructorSectionHomePortal.do") //visit url
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("deva3ins@live.com") //entering User Name
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("123456") //entering password
        cy.get('#signinForm').submit()
        cy.wait(15000); 
        cy.get('#addCourse').should('be.visible').click()
        cy.wait(5000)
        cy.title().should('eq','McGraw-Hill Connect | Add My Course | Select Course')
        cy.get('[class="form-control mgh-courseSearch-textbox"]').should('be.enabled').click().type("Economics") //entering ISBN
        cy.get('[class="mgh-courseSearch-button enable-button"]').should('be.enabled').click() //click search button
        cy.get('[value="0073273163"]').should('be.visible').click()
        cy.wait(11000)
        cy.get(':nth-child(7) > .row-width-12 > .row-width-2 > .btn').should('be.visible').should('be.enabled').click()
        cy.get('input[name=crsName1]').should('be.visible').should('be.enabled').type("Course_20032020")
        cy.get('input[name=sectionName]').should('be.visible').should('be.enabled').type("Section_20032020")
        cy.get('#create-button').should('be.visible').click()
        cy.wait(11000)
        cy.title().should('eq','jlfhlesf') 
        //cy.get('[class="buttons btbl sectionhome-button"]').should('eq','Continue to section home').click() //click continue to section homepage
        //cy.title().should('eq','McGraw-Hill Connect | section123') 
       // cy.get('[class="icon-plus"]').should('be.visible').click() //click continue to section homepage

        
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
   

})
