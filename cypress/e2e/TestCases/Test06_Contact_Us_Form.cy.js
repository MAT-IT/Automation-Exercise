///<reference types="cypress" />
import homePage from "../PageObjectRepo/HomePage";
import contactUsPage from "../PageObjectRepo/ContactUsPage";

const homepage = new homePage;
const contactUs = new contactUsPage;

describe("Test Case 6: Contact Us Form",()=>{
    it("Navigate to url 'http://automationexercise.com'",()=>{
        cy.GoToUrl()
    })

    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
    })
    
    it("Click on 'Contact Us' button",()=>{
        homepage.ContactUsBotton().click()
    })

    it("Verify 'GET IN TOUCH' is visible",()=>{
        contactUs.GetInTouch().should("be.visible")
    })

    it("Enter name, email, subject and message",()=>{
        contactUs.name().type("mat");
        contactUs.email().type("mat@gmail.com")
        contactUs.subject().type("tell off")
        contactUs.message().type("your bird is distrub us when we studie lesson")
    })
    it("Upload file and click submit button",()=>{
        contactUs.selectFile().attachFile("nature.jpeg")
        contactUs.submitBtn().click()
    })
    it("Verify success message 'Success! Your details have been submitted successfully.' is visible",()=>{
        contactUs.status().should("have.text","Success! Your details have been submitted successfully.")
    })
    it("Click 'Home' button and verify that landed to home page successfully",()=>{
        contactUs.backhomepage().click()
        homepage.logo().should("be.visible")
    })
})