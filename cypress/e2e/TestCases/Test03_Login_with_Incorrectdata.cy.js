///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page"

const homepage = new HomePage()
const loginSignup = new signUpLoginPage
describe("Test Case 3: Login User with incorrect email and password",()=>{
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
        loginSignup.LoginHeader().should("be.visible")
        loginSignup.LoginHeader().should("have.text","Login to your account")
    })
    it("Enter incorrect email address and password",()=>{
        loginSignup.LoginEmailBox().type("abc@gmail")
        loginSignup.LoginPasswordBox().type(" ")
    })
    it("Click 'login' button",()=>{
        loginSignup.LoginButton().click()
    })
    it("Verify error 'Your email or password is incorrect!' is visible",()=>{
        cy.get('.login-form > form > p').should("have.text","Your email or password is incorrect!")
    })
})