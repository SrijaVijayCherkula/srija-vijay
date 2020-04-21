import FMSLoginPage from '../../PageObjects/FMSLoginPage'
import LeadPage from '../../PageObjects/LeadPage'

describe('TestSuite 1', function() 
{
  beforeEach('FMS', function(){
    cy.fixture('FMSData').then(function(data){
        this.data=data
    })
  })
  
    it('Login to FMS', function()
    {
       const fmslp=new FMSLoginPage()
       const lc=new LeadPage()
       cy.FMSlogin(this.data.email,this.data.password)
       cy.FMSLeadCreation(this.data.PrimaryFirstName,this.data.PrimaryLastName,this.data.PhoneNumber,this.data.Email,this.data.ZipCode,this.data.Address)
       
      })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})
