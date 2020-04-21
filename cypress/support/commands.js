
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import LoginPage from '../PageObjects/LoginPage'
import AddCoursePage from '../PageObjects/AddCoursePage'
import FMSLoginPage from '../PageObjects/FMSLoginPage'
import LeadPage from '../PageObjects/LeadPage'
Cypress.Commands.add("login", (email, password) => { 
    const lp=new LoginPage()
    lp.visit()
    lp.typeUserName(email)
    lp.typePassword(password)
    lp.clkSubmit()
    })
 Cypress.Commands.add("FMSlogin", (email, password) => { 
        const fmslp=new FMSLoginPage()
        fmslp.visit()
        fmslp.typeUserName(email)
        fmslp.typePassword(password)
        fmslp.clkSubmit()
        fmslp.verifyAlert()
        fmslp.clkClose()
    })
 Cypress.Commands.add("FMSLeadCreation", (PrimaryFirstName,PrimaryLastName,PhoneNumber,Email,ZipCode,Address) => { 
            const lc=new LeadPage()
            lc.clkLead()
            lc.selectAddNewLead()
            lc.verifyFrame()
            lc.typePrimaryFirstName(PrimaryFirstName)
            lc.typePrimaryLastName(PrimaryLastName)
            lc.selectNTypePhoneNumber(PhoneNumber)
            lc.typeEmail(Email)
            lc.typeZipCode(ZipCode)
            lc.typeAddress(Address)
            
       })
 Cypress.Commands.add("addCourse", (book,coursename,sectionname) => {
    const acp=new AddCoursePage()
       acp.clkAddCourse()
       acp.typeIsbn(book)
       acp.clkSearch()
       acp.clkISBN()
       acp.selectBundle()
       acp.typeCourseName(coursename)
       acp.typeSectionName(sectionname)
       acp.clkCreateCourse()
       acp.validate()
       acp.clkContinuetoCoursePage()
       acp.clkNewSection()
      // acp.clkHome()
      acp.validateSection(sectionname)
 })
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
