import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage ()


describe('Orange HRM Tests', () => {

 
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myinfoPage.fillEmployeeDetails(chance.ssn({ dashes: false }), chance.cpf(), chance.ssn(), '2025-07-29', chance.age(), chance.ssn({ ssnFour: true }))
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
  })

})