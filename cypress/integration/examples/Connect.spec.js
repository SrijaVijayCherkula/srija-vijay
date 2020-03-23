import LoginPage from '../PageObjects/LoginPage'
import AddCoursePage from '../PageObjects/AddCoursePage'


describe('TestSuite', function() 
{
  
    it('Login to Connect QALive', function()
    {
       const lp=new LoginPage()
       const acp=new AddCoursePage()
       lp.visit()
       lp.typeUserName('deva3ins@live.com')
       lp.typePassword('123456')
       lp.clkSubmit()
       acp.clkAddCourse()
       acp.typeIsbn('Economics')
       acp.clkSearch()
       acp.clkISBN()
       acp.selectBundle()
       acp.typeCourseName('Course_20032020')
       acp.typeSectionName('Section_20032020')
       acp.clkCreateCourse()
       acp.validate()
       acp.clkContinuetoCoursePage()
       acp.clkNewSection()
       acp.clkHome()
       acp.validateSection()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})