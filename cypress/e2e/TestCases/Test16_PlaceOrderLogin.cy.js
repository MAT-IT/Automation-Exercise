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
        //Verify Address Details and Review Your Order
        cartpage.adress_forDelivery().should("be.visible")
        cartpage.product_Quantity().should("be.visible")
        //Enter description in comment text area and click 'Place Order'
        cartpage.form().type("Thanks")
        cartpage.placeOrderBtn().click()
        //Enter payment details: Name on Card, Card Number, CVC, Expiration date
        //Click 'Pay and Confirm Order' button
        cy.Payment()
        //Verify success message 'Your order has been placed successfully!'
        cartpage.PlaceOrderedMessage().should("have.text","Congratulations! Your order has been confirmed!")
        //Click 'Delete Account' button 
        cartpage.DeleteAccountBtn().click()
    })    
    
      
})