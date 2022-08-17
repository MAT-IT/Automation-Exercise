

///<reference types="cypress" />

import CartPage from "../PageObjectRepo/CartPage"
import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()
const cartpage = new CartPage()

describe("Test Case 11: Verify Subscription in Cart page",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Click 'Cart' button",()=>{
        homepage.cartBtn().click()
    })
    it("Scroll down to footer Verify text 'SUBSCRIPTION'",()=>{
        cartpage.subsHeader().should("have.text","Subscription")
    })
    it("Enter email address in input and click arrow button",()=>{
       cartpage.subsEmailBox().type("hel@gmail.com")
       cartpage.subsBtn().click().wait(5000)
    })
    it("Verify success message 'You have been successfully subscribed!' is visible",()=>{
      cartpage.footContainer().contains("You have been successfully subscribed!")  
    })
    
})