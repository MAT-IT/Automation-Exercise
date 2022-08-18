///<reference types="cypress" />
import productPage from "../PageObjectRepo/ProductPage"
import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage()
const productpage = new productPage()
const cartpage =new CartPage()

describe("Test Case 12: Add Products in Cart",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Click on 'Products' button",()=>{
        homepage.productbtn().click()
    })
    // it("Hover over first product and click 'Add to cart'",()=>{
    //     //cy.get("div[class='productinfo text-center']").eq(0).trigger("mouseover")
    //     cy.get("div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']").eq(0).click()
    // })
    // it("Click 'Continue Shopping' button",()=>{
    //     productpage.CountinueShoppingBtn().click()
    // })
    // it("Hover over first product and click 'Add to cart'",()=>{
    //     //cy.get("div[class='productinfo text-center']").eq(0).trigger("mouseover")
    //     cy.get("div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']").eq(1).click()
    // })
    // it("Click 'Continue Shopping' button",()=>{
    //     productpage.CountinueShoppingBtn().click()
    // })
    it("Hover over second product and click 'Add to cart'",()=>{
       // cy.get("div[class='productinfo text-center']").eq(1).trigger("mouseover")
        cy.get("div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']").eq(0).click()
     })
    // it("Click 'Continue Shopping' button",()=>{
    //      productpage.CountinueShoppingBtn().click()
    // })       
    
    it("Click 'View Cart' button",()=>{
         productpage.ViewCartBtn().click()
    })
    it("Verify both products are added to Cart",()=>{
       cartpage.cartProductImage().should("be.visible")
    })
})