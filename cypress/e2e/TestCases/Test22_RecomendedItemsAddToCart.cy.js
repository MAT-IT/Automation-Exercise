///<reference types="cypress" />

import CartPage from "../PageObjectRepo/CartPage"
import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()
const cartpage = new CartPage()

describe("Test Case 22: Add to cart from Recommended items",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify 'RECOMMENDED ITEMS' are visible",()=>{
        homepage.recomendedItemsTitle().should("be.visible")
    })
    it("Click on 'Add To Cart' on Recommended product",()=>{
        homepage.recomendedAddToCart().click()
    })
    it("Click on 'View Cart' button",()=>{
        homepage.ViewCartBtn().click()
    })
    it("Verify that product is displayed in cart page",()=>{
        cartpage.cartProductImage().should("be.visible")
    })    
    
})