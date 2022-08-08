// Test Case 3: Login User with incorrect email and password
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter incorrect email address and password
// 7. Click 'login' button
// 8. Verify error 'Your email or password is incorrect!' is visible

///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page"

const homepage = new HomePage()
const loginSignup = new signUpLoginPage
describe("Test Case 3: Login User with incorrect email and password",()=>{
    it("Navigate to url",()=>{
        cy.visit("http://automationexercise.com")
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
    it("Enter correct email address and password",()=>{
        loginSignup.LoginEmailBox().type("abc@gmail")
        loginSignup.LoginPasswordBox().type(" ")
    })
    it("Click 'login' button",()=>{
        loginSignup.LoginButton().click()
    })
})