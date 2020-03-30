import LoginPage from '../PageObjects/LoginPage'
import AddCoursePage from '../PageObjects/AddCoursePage'


describe('TestSuite', function() 
{
  beforeEach('Connect', function(){
    cy.fixture('data').then(function(data){
        this.data=data
    })
  })
  
    it('Login to Connect QALive', function()
    {
       const lp=new LoginPage()
       const acp=new AddCoursePage()
       lp.visit()
       lp.typeUserName(this.data.email)
       lp.typePassword(this.data.password)
       lp.clkSubmit()
       acp.clkAddCourse()
       acp.typeIsbn(this.data.book)
       acp.clkSearch()
       acp.clkISBN()
       acp.selectBundle()
       acp.typeCourseName(this.data.coursename)
       acp.typeSectionName(this.data.sectionname)
       acp.clkCreateCourse()
       acp.validate()
       acp.clkContinuetoCoursePage()
       acp.clkNewSection()
      // acp.clkHome()
      // acp.validateSection()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})