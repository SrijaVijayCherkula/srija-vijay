class LoginPage
{
    visit()
    {
        cy.visit("https://connectqalv.mheducation.com/connect/hmInstructorSectionHomePortal.do",{timeout:60000})
    }
    typeUserName(value)
    {
        const field=cy.get('input[name=userName]')
        field.clear()
        field.type(value)
        return this
    }
    typePassword(value)
    {
        const field=cy.get('input[name=password]')
        field.clear()
        field.type(value)
        return this
    }
    clkSubmit()
    {
        const btnSubmit=cy.get('[type=submit]')
        btnSubmit.click()
        cy.wait(15000)

    }

}

export default  LoginPage