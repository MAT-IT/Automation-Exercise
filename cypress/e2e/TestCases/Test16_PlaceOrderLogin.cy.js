///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"
import productPage from "../PageObjectRepo/ProductPage"

const homepage = new HomePage()
const cartpage =new CartPage()
const productpage =new productPage()


describe("Test Case 16: Place Order: Login before Checkout",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Click Login button, Fill email, password and click 'Login' button, Verify 'Logged",()=>{
        cy.LogIn()
        homepage.AddToCartBtn().eq(1).click()
        homepage.ViewCartBtn().click()
        cartpage.cartProductImage().should("be.visible")
        cartpage.proceedToCheckout().click()
    })    
    
    // it("Add products to cart",()=>{
    //     //homepage.AddToCartBtn().eq(1).click()
    //     cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    // })
    
    // it("Click 'View Cart' button",()=>{
    //    // homepage.ViewCartBtn().click()
    //    cy.get('u').click()
    // })

    // it("Verify that cart page is displayed",()=>{
    //     //cartpage.cartProductImage().should("be.visible")
    // })
    // it(" Click 'Proceed To Checkout' button",()=>{
    //     //cartpage.proceedToCheckout().click()
    // })   
    // it("Verify Address Details and Review Your Order",()=>{

    // })
    // it("Enter description in comment text area and click 'Place Order' ",()=>{

    // })
    // it("Enter payment details: Name on Card, Card Number, CVC, Expiration date",()=>{

    // })
    // it("Click 'Pay and Confirm Order' button",()=>{

    // })
    // it("Verify success message 'Your order has been placed successfully!'",()=>{

    // })
    // it("Click 'Delete Account' button ",()=>{

    // })
    // it("Verify 'ACCOUNT DELETED!' and click 'Continue' button",()=>{

    // })
    
})