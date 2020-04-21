class LeadPage
{
    typePrimaryFirstName(value)
    {
        const txtPrimaryFirstName=cy.getIframeBody()
        txtPrimaryFirstName.find('#primaryFirstName')
        txtPrimaryFirstName.clear()
        txtPrimaryFirstName.type(value)
        return this
    }
    typePrimaryLastName(value)
    {
        const txtPrimaryLastName=cy.getIframeBody()
        txtPrimaryLastName.find('#primaryLastName')
        txtPrimaryLastName.clear()
        txtPrimaryLastName.type(value)
        return this
    }
   selectNTypePhoneNumber(value)
    {
        const lnkPhoneNo=cy.getIframeBody().find('#phoneNumber')
        lnkPhoneNo.clear()
        lnkPhoneNo.type(value)
        return this
    }
    typeEmail(value)
    {
        const field=cy.getIframeBody().find('#emailAddress')
        field.clear()
        field.type(value)
        return this
    }
    
    typeZipCode(value)
    {
        const field=cy.getIframeBody().find('#homeAddressZipCode')
        field.clear()
        field.type(value)
        return this
    }
    typeAddress(value)
    {
        const field=cy.getIframeBody().find('#homeAddressLine1')
        field.clear()
        field.type(value)
        return this
    }

    clkLead()
    {
        const lnkLead=cy.get('#leadsTopMenu',{timeout:60000})
        lnkLead.click()

    }
    selectAddNewLead()
    {
        const lnkAddNewLead=cy.contains('Add New Lead',{timeout:60000})
        lnkAddNewLead.click()
    
    }
    
    verifyFrame()
    {
        const field=cy.get('.cboxIframe')
        field.should('be.visible')
    }
    clkClose()
    {
        const btnClose=cy.get('#cboxClose')
        btnClose.should('be.visible').click()
    }

}

export default  LeadPage