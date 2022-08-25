///<reference types="cypress" />
import productPage from "../PageObjectRepo/ProductPage"
import HomePage from "../PageObjectRepo/HomePage"
import searchProductPage from "../PageObjectRepo/SearchProductPage"

const homepage = new HomePage()
const productpage = new productPage()
const searchproduct= new searchProductPage()

describe("Test Case 9: Search Product",()=>{
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
    it("Enter product name in search input and click search button",()=>{
        productpage.searchInputBox().type("JEANS")
        productpage.searchButton().click()
    })
    it("Verify 'SEARCHED PRODUCTS' is visible",()=>{
        
    })
    it("Verify all the products related to search are visible",()=>{
       searchproduct.productList().eq(0).should("contain.text","Jeans")
       searchproduct.productList()
                .then(function(item){
                    const itemCount=Cypress.$(item).length;
                    cy.log(itemCount)
                    for (var i = 0; i < itemCount; i++) {
                        searchproduct.productList()
                            .eq(i).should('contain.text', "Jeans")
                    
                   }
                })
    
    })

})