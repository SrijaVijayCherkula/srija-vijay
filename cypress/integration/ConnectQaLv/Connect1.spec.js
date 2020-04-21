import LoginPage from '../../PageObjects/LoginPage'
import AddCoursePage from '../../PageObjects/AddCoursePage'


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
       cy.login(this.data.email,this.data.password)
       cy.addCourse(this.data.book,this.data.coursename,this.data.sectionname)
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})