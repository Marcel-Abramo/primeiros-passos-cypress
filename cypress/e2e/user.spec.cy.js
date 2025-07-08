import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
   
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
  
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    


    
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest') RETIRAR
     
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('LicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')  
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).eq(7).clear().type('ssnNumberTest') RETIRAR
    //cy.get(selectorsList.genericField).eq(8).clear().type('sinNumberTest') RETIRAR
    
    //Nationality
    cy.get(selectorsList.selectText).eq(0).click() //aqui a caixa abriu com o click
    cy.get(selectorsList.selectNationality).click() //aqui seleciona a nacionalidade número 27 da lista
    
    //Marital Status
    cy.get(selectorsList.selectText).eq(1).click() //aqui a caixa abriu com o click
    cy.get(selectorsList.selectMaritalStatus).click() //aqui seleciona o status número 3 da lista
   
    //Date of Birth
    cy.get(selectorsList.genericField).eq(8).clear().type('2025-08-08')  
    cy.get(selectorsList.dateCloseButton).click()

    //Gender
    cy.get(selectorsList.selectGender).eq(0).click() 
    
    


    //cy.get('.oxd-select-dropdown').scrollIntoView() //aqui a caixa está aberta TESTE RETIRAR
    //cy.contains('li', 'Brazilian').click() TESTE RETIRAR
    //cy.wait(2000)
    
       
    
    cy.get(selectorsList.submitButton).eq(0).click({force: true })
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    
    

   



  })


it('sets Brazilian', () => {
  // https://on.cypress.io/select
  // set using text
  // <option value="MA">Massachusetts</option>
  cy.get('#my-state').select('Massachusetts')

  // confirm the selected value
  cy.get('#my-state').should('have.value', 'MA')
})


















  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})