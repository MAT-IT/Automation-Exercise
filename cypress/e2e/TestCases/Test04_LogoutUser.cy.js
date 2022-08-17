
// 10. Verify that user is navigated to login page
///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page"

const homepage = new HomePage()
const login = new signUpLoginPage
describe("Test Case 4: Logout User",()=>{    
  
    it("Navigate to url",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible") 
    })
    it("Click on 'Signup / Login' button",()=>{
        homepage.SignUploginButton().click()
    })
    it("Verify 'Login to your account' is visible",()=>{
        login.LoginHeader().should("be.visible")
        login.LoginHeader().should("have.text","Login to your account")
    })
    it("Enter correct email address and password",()=>{
        login.LoginEmailBox().type("amazontestcypress@gmail.com")
        login.LoginPasswordBox().type("2301")
    })
    it("Click 'login' button",()=>{
        login.LoginButton().click()
    })
    it("Verify that 'Logged in as username' is visible",()=>{
        login.loggedInAs().should("be.visible")
    })
    it("Click 'Logout' button",()=>{
        login.Logout().click()
    })
    
})