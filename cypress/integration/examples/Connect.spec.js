import LoginPage from '../PageObjects/LoginPage'
describe('TestSuite', function() 
{
    Before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
  
    it('Login to Connect QALive', function()
    {
       const lp=new LoginPage()
       lp.visit()
       lp.typeUserName(this.data.name)
       lp.typePassword(this.data.password)
       lp.clkSubmit()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})