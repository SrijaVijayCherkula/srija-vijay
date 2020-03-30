class AddCoursePage
{
    clkAddCourse()
    {
        const btnAddCourse=cy.get('#addCourse')
        btnAddCourse.should('be.visible')
        btnAddCourse.click()
        cy.wait(5000)
    }
    typeIsbn(value)
    {
        const field=cy.get('[class="form-control mgh-courseSearch-textbox"]')
        field.should('be.enabled')
        field.click()
        field.type(value)
        return this
    }
    clkSearch()
    {
        const btnSearch=cy.get('[class="mgh-courseSearch-button enable-button"]')
        btnSearch.should('be.enabled')
        btnSearch.click()
    }
    clkISBN()
    {
        const lnkISBN=cy.get('[value="0073273163"]')
        lnkISBN.should('be.visible')
        lnkISBN.click()
        cy.wait(11000)
     }
     selectBundle()
    {
        const slctBundle=cy.get(':nth-child(7) > .row-width-12 > .row-width-2 > .btn')
        slctBundle.should('be.visible')
        slctBundle.should('be.enabled')
        slctBundle.click()
     }
     typeCourseName(value)
     {
         const field=cy.get('input[name=crsName1]')
         field.should('be.visible')
         field.should('be.enabled')
         field.type(value) //
         return this
     }
     typeSectionName(value)
     {
         const field=cy.get('input[name=sectionName]')
         field.should('be.visible')
         field.should('be.enabled')
         field.type(value) //
         return this
     }
     clkCreateCourse()
     {
         const btnCreate=cy.get('#create-button')
         btnCreate.should('be.visible')
         btnCreate.click()
         cy.wait(11000)

     }
     validate()
     {
         const verifyTitle=cy.title()
         verifyTitle.should('eq','McGraw-Hill Connect | My Course Created') 
         cy.wait(10000)

     }
   
     clkContinuetoCoursePage()
     {
         const btnContinueToCoursePage=cy.get('.buttons')
         btnContinueToCoursePage.click()
     }
     clkNewSection()
     {
         const btnNewSection=cy.get('#continue_section')
         btnNewSection.click()
         cy.wait(11000)
     }
    /* clkHome()
     {
         const lnkHome=cy.get('ul.right')
         lnkHome.should('be.enabled').click()
         cy.wait(10000)
     }
     validateSection()
     {
         const verifySection=cy.get('a.section-name-js')
         verifySection.contains('a.section-name-js', 'Section_20032020').should('be.visible')

     }*/

}

export default  AddCoursePage
