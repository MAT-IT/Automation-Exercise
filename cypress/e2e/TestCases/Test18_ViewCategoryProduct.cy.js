// ///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import productPage from "../PageObjectRepo/ProductPage"

const homepage = new HomePage()
const product = new productPage()

describe("Test Case 18: View Category Products",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    
    it("Category Side women and man",()=>{
        // Verify that categories are visible on left side bar
        homepage.category().should("be.visible")
        //Click on 'Women' category
        product.categoryWomen().click()
        //Click on any category link under 'Women' category
        product.categoryWomenDress().click({force: true})
        //Verify that category page is displayed and confirm text 
        product.productTitle().should("be.visible")
        //On left side bar, click on any sub-category link of 'Men' category
        product.categoryMan().click()
        product.categoryManTshirts().click({force: true})
        //Verify that user is navigated to that category page
        product.productTitle().should("be.visible")        

    })
    
})