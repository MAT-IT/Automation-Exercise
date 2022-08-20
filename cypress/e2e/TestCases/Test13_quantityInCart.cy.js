///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"
import productPage from "../PageObjectRepo/ProductPage"

const homepage = new HomePage()
const cartpage =new CartPage()
const productpage =new productPage()


describe("Test Case 13: Verify Product quantity in Cart",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
        cy.log("homepage gidildi")
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Click 'View Product' for any product on home page",()=>{
        homepage.viewProduct().eq(3).click()
    })   
    it("Verify product detail is opened",()=>{
       productpage.viewProductQuantityLabel().should("be.visible")
     })
    it("Increase quantity to 4",()=>{       
       productpage.viewProductQuantity().clear().type("4")       
    })
    it("Click 'Add to cart' button",()=>{
      productpage.addtocartbtn().click()
    })
    it("Click 'View Cart' button",()=>{
       productpage.ViewCartBtn().click()
    })
    it("Verify that product is displayed in cart page with exact quantity",()=>{
       cartpage.cartProductImage().should("be.visible")
    })
})