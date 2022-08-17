///<reference types="cypress" />
import productPage from "../PageObjectRepo/AllProductPage"
import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()
const productpage = new productPage

describe("Test Case 8: Verify All Products and product detail page",()=>{
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
    it("Verify user is navigated to ALL PRODUCTS page successfully",()=>{
        productpage.header().should("have.text","All Products")
    })
    it("The products list is visible",()=>{
        productpage.allproductCart().then(function(item){
            const itemCount=Cypress.$(item).length;
            cy.log(itemCount)   
            productpage.allproductCart().should("have.length",itemCount)         
        })
    })
    it("Click on 'View Product' of first product",()=>{
        productpage.wievfirtproduct().click()
    })
    it("Verify that detail is visible: product name, category, price, availability, condition, brand",()=>{
        productpage.wievproductname().should("be.visible")
        productpage.wievproductCategory().contains("Category")
        productpage.wievproductPrice().contains(500)
        productpage.wievproductAvailability().should("contain.text","In Stock")
        productpage.wievproductCondition().contains("New")
        productpage.wievproductBrand().contains("Polo")
    })

})