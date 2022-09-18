///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page"
import {testData} from "../GetData"

const homepage = new HomePage()
const loginSignup = new signUpLoginPage()

describe("Data Driven Testing",()=>{

        
     testData.forEach((data)=>{
         it("Incorrect emails input",()=>{
             cy.GoToUrl()
             homepage.SignUploginButton().click()
             loginSignup.LoginHeader().should("be.visible")
             loginSignup.LoginHeader().should("have.text","Login to your account")
             loginSignup.LoginEmailBox().type(data.email)
             loginSignup.LoginPasswordBox().type(data.password)
             loginSignup.LoginButton().click()
             cy.get('.login-form > form > p').should("have.text","Your email or password is incorrect!")
         })
     })
    
   
})