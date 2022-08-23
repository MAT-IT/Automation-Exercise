///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage()
const cartpage =new CartPage()

describe("Test Case 17: Remove Products From Cart",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })    
    it("add product to cart , verify and delete",()=>{
        //Add the product to cart
        homepage.AddToCartBtn().eq(2).click()
        // Click 'view Cart' button
        homepage.ViewCartBtn().click()
        //Verify that cart page is displayed
        cartpage.cartProductImage().should("be.visible")
        //Click 'X' button corresponding to particular product
        cartpage.DeleteProductBtn().click()
        //Verify that product is removed from the cart
        cartpage.VerifyDeletingProduct().should("contain.text","")
           


    })
    
})