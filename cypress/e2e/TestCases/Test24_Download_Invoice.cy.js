// 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
// 20. Click 'Continue' button
// 21. Click 'Delete Account' button
// 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button

///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage()
const cartpage =new CartPage()

describe("Test Case 24: Download and verify invoice",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Place Order,Login before Checkout and payment",()=>{
        //Click Login button, Fill email, password and click 'Login' button, Verify 'Logged
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
        //downlaod button verify ogren yap
        cy.get('.col-sm-9 > .btn-default').click().wait(2000)

        cy.verifyDownload('invoice.txt');

        // verify download by file extension or partial filename
        cy.verifyDownload('.txt', { contains: true });
        cy.verifyDownload('inv', { contains: true });
        
       
    })    
    
      
})