///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"
import productPage from "../PageObjectRepo/ProductPage"

const homepage = new HomePage()
const cartpage =new CartPage()
const productpage =new productPage()


describe("Test Case 14: Place Order: Register while Checkout",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Add the product to cart",()=>{
        homepage.AddToCartBtn().eq(2).click()
    })
    it(" Click 'View Cart' button",()=>{
        homepage.ViewCartBtn().click()
    })
    it("Verify that cart page is displayed",()=>{
        cartpage.cartProductImage().should("be.visible")
    })
    it("Click Proceed To Checkout",()=>{
        cartpage.proceedToCheckout().click()
    })
    it("Click 'Register / Login' button",()=>{
        cartpage.checkoutRegisterLogin().click()
    })
    it(" Fill all details in Signup and create account",()=>{

    })
    it("Verify 'ACCOUNT CREATED!' and click 'Continue' button",()=>{

    })
    it("Verify ' Logged in as username' at top",()=>{

    })
    it("Click 'Cart' button",()=>{

    })
    it(" Click 'Proceed To Checkout' button",()=>{

    })   
    it("Verify Address Details and Review Your Order",()=>{

    })
    it("Enter description in comment text area and click 'Place Order' ",()=>{

    })
    it("Enter payment details: Name on Card, Card Number, CVC, Expiration date",()=>{

    })
    it("Click 'Pay and Confirm Order' button",()=>{

    })
    it("Verify success message 'Your order has been placed successfully!'",()=>{

    })
    it("Click 'Delete Account' button ",()=>{

    })
    it("Verify 'ACCOUNT DELETED!' and click 'Continue' button",()=>{

    })
    
})