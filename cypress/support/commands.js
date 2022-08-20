// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
import HomePage from '../e2e/PageObjectRepo/HomePage'
import signUpLoginPage from "../e2e/PageObjectRepo/SignUp_Login_page"

const homepage = new HomePage()
const login = new signUpLoginPage()

Cypress.Commands.add("GoToUrl", function() {
    cy.visit("http://automationexercise.com")
  })
 
  Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;                                      //commands.js file'a alinabilir
  });
   
Cypress.Commands.add("LogIn", function () {
  homepage.SignUploginButton().click()
  login.LoginEmailBox().type("amazontestcypress@gmail.com")
  login.LoginPasswordBox().type("2301")
  login.LoginButton().click()
  login.loggedInAs().should("be.visible")
})
