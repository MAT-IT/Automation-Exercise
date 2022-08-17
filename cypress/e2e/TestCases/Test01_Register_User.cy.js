 
///<reference types="cypress" />
import AccountInfo from "../PageObjectRepo/AccountInfoPage";
import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page";
const homepage = new HomePage();
const signuploginpage = new signUpLoginPage();
const accountinfo = new AccountInfo();
describe("Test Case 1: Register user", () => {
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
    it("Enter name and email address", () => {
        signuploginpage.SignUpNameBox().type("cebeyden")
        signuploginpage.SignUpEmailBox().type("cebeyden@gmail.com")
    })
    it("Click 'Signup' button", () => {
        signuploginpage.SignUpButton().click()
    })
    it("Verify that 'ENTER ACCOUNT INFORMATION' is visible", () => {
        accountinfo.enteraccountinfo().should("be.visible")
    })
    it("Fill details: Title, Name, Email, Password, Date of birth", () => {
        //accountinfo.titleMr().click() 
        accountinfo.titlecheck().contains("Mr").click()
        accountinfo.passwordbox().type("1234")
        accountinfo.dobdays().select("6")
        accountinfo.dobmonths().select("May")
        accountinfo.dobyears().select(5)

    })
    it(" Select checkbox Sign up for our newsletter and special offers", () => {
        accountinfo.newletterscheckbox().check()
        accountinfo.offercheckbox().check()
    })
    it("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", () => {
        accountinfo.adressfirstname().type("ali")
        accountinfo.adresslastname().type("haydar")
        accountinfo.adressline1().type("dfgg")
        accountinfo.adressline2().type("hgh")
        accountinfo.adresscity().type("fifi")
        accountinfo.adresscompany().type("yuyu")
        accountinfo.adressstate().type("east")
        accountinfo.adresszipcode().type("4578")
        accountinfo.adresscountryselectbox().select(3)
        accountinfo.adressmobilenumber().type("4141114")
    })
    it("Click 'Create Account button'",()=>{
        accountinfo.createaccountbutton().click()
    })
    it("Verify that 'ACCOUNT CREATED!' is visible",()=>{
        cy.get('b').should("be.visible")
    })
    it("Click 'Continue' button",()=>{
         cy.get('.pull-right .btn').click({force:true})
    })
    // it("Verify that 'Logged in as username' is visible",()=>{
    //      cy.get(':nth-child(10) > a').should("be.visible")
    // })
    // it("Click 'Delete Account' button",()=>{
    //      cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    // })
})