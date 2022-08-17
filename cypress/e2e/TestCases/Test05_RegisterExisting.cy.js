///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page";

const homepage = new HomePage();
const signuploginpage = new signUpLoginPage();

describe("Test Case 5: Register User with existing email", () => {
    it("Navigate to Url", () => {
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully", () => {
        cy.title().should("contain", "Automation Exercise")
        homepage.logo().should("be.visible")
    })
    it("Click on 'Signup / Login' button", () => {
        homepage.SignUploginButton().click()
    })
    it("Verify 'New User Signup!' is visible", () => {
        signuploginpage.signUpFormHeader().should("contain", "New User Signup!")
    })
    it("Enter name and already registered email address", () => {
        signuploginpage.SignUpNameBox().type("cebeyden")
        signuploginpage.SignUpEmailBox().type("cebeyden@gmail.com")
    })
    it("Click 'Signup' button", () => {
        signuploginpage.SignUpButton().click()
    })
    it(" Verify error 'Email Address already exist!' is visible",()=>{
        cy.get('.signup-form > form > p').should("have.text","Email Address already exist!")
    })
    
})