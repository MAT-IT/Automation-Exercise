///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()

describe("Test Case 10: Verify Subscription in home page",
  ()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Scroll down to footer Verify text 'SUBSCRIPTION",()=>{
        homepage.subscriptionTitle().should("have.text","Subscription")
    })
    it("Enter email address in input and click arrow button",()=>{
        homepage.subscripEmailBox().type("hello@gmail.com")
        homepage.subscripButton().click().wait(5000)
    })
    it("Verify success message 'You have been successfully subscribed!' is visible",()=>{
        cy.get('.footer-widget > .container').contains("You have been successfully subscribed!")
    })
    
})