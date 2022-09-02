// 12. Verify that the delivery address is same address filled at the time registration of account
// 13. Verify that the billing address is same address filled at the time registration of account
// 14. Click 'Delete Account' button
// 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage()
const cartpage =new CartPage()

describe("Test Case 15: Place Order: Register before Checkout",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })    
    it("register ,add product and payment",()=>{
        //Click 'Signup / Login' button
        homepage.SignUploginButton().click()
        //Fill all details in Signup and create account
        cy.SignUp()
        //"Verify ' Logged in as username' at top",()=>{
        homepage.logged_in_as().should("contain.text","bay")
        //Add the product to cart
        homepage.AddToCartBtn().eq(2).click()
        //Click 'Cart' button
        homepage.cartBtn().click({force: true})
        //Verify that cart page is displayed
        cartpage.cartProductImage().should("be.visible")        
        //Click Proceed To Checkout
        cartpage.proceedToCheckout().click()
        //Verify Address Details and Review Your Order
        cartpage.adress_forDelivery().should("be.visible")
    //     cartpage.product_Quantity().should("be.visible")
    //     //Enter description in comment text area and click 'Place Order'
    //     cartpage.form().type("Thanks")
    //     cartpage.placeOrderBtn().click()
    //     //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    //     //Click 'Pay and Confirm Order' button
    //     cy.Payment()
    //     //Verify success message 'Your order has been placed successfully!'
    //     cartpage.PlaceOrderedMessage().should("have.text","Congratulations! Your order has been confirmed!")
    //     //Click 'Delete Account' button 
    //     cartpage.DeleteAccountBtn().click()
    })
    
})