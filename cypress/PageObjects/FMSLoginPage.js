class FMSLoginPage
{
    visit()
    {
        cy.visit("https://qafms.goddardschool.com/login.aspx",{timeout:60000})
    }
    typeUserName(value)
    {
        const field=cy.get('input[name=loginName]')
        field.clear()
        field.type(value)
        return this
    }
    typePassword(value)
    {
        const field=cy.get('input[name=loginPass]')
        field.clear()
        field.type(value)
        return this
    }
    clkSubmit()
    {
        const btnSubmit=cy.get('input[name=loginButton]',{timeout:60000})
        btnSubmit.click()

    }
    verifyAlert()
    {
        const field=cy.get('#cboxContent')
        field.should('be.visible')
    }
    clkClose()
    {
        const btnClose=cy.get('#cboxClose')
        btnClose.should('be.visible').click()
    }

}

export default  FMSLoginPage