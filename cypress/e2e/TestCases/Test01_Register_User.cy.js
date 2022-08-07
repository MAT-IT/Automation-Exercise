// Test Case 1: Register user
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

///<reference types="cypress" />
import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page";
const homepage = new HomePage();
const signuploginpage =new signUpLoginPage();
describe("Register User",()=>{
    it("Navigate to Url",()=>{
        cy.visit("http://automationexercise.com")
    })
    it("Verify that home page is visible successfully",()=>{
        cy.title().should("contain","Automation Exercise")
        homepage.logo().should("be.visible")
    })
    it("Click on 'Signup / Login' button",()=>{
        homepage.loginButton().click()
    })
    it("Verify 'New User Signup!' is visible",()=>{
        signuploginpage.signUpFormHeader().should("contain","New User Signup!")
    })
    it("Enter name and email address",()=>{
        signuploginpage.SignUpNameBox().type("mat")
        signuploginpage.SignUpEmailBox().type("abc@gmail.com")
    })
    it("Click 'Signup' button",()=>{
       signuploginpage.SignUpButton().click()
    })
})