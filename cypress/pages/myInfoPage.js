class MyInfoPage {
   
    selectorsList () {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-mm-dd']",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']",
        selectText: '.oxd-select-text--arrow',
        selectNationality: '.oxd-select-dropdown > :nth-child(27)',
        selectMaritalStatus: '.oxd-select-dropdown > :nth-child(3)',
        selectGender: '.oxd-radio-input',
      
        }

        return selectors

    }
    
    fillPersonalDetails(firstName, lastName, nickname) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(selectorsList.genericField).eq(3).clear().type(nickname)
    }

     fillEmployeeDetails(employeeId, otherId, driversLicense, expiryDate, ssnNumber,sinNumber) {

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)  
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
     }

     saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true })
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
     }

     fillStatus() {
        //Nationality
        cy.get(this.selectorsList().selectText).eq(0).click() //aqui a caixa abriu com o click
        cy.get(this.selectorsList().selectNationality).click() //aqui seleciona a nacionalidade número 27 da lista
    
        //Marital Status
        cy.get(this.selectorsList().selectText).eq(1).click() //aqui a caixa abriu com o click
        cy.get(this.selectorsList().selectMaritalStatus).click() //aqui seleciona o status número 3 da lista
   
        //Date of Birth
        cy.get(this.selectorsList().genericField).eq(8).clear().type('2025-08-08')  
        cy.get(this.selectorsList().dateCloseButton).click()

        //Gender
        cy.get(this.selectorsList().selectGender).eq(0).click() 

     }

}

export default MyInfoPage