import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

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

    myinfoPage.fillPersonalDetails('First name', 'Last name', 'nickName')
    myinfoPage.fillEmployeeDetails('EmployId', 'otherId', 'driversLicence', '2025-07-29', '123456', '789789')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
  })

})