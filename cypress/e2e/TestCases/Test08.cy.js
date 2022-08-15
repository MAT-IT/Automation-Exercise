// Test Case 8: Verify All Products and product detail page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

///<reference types="cypress" />
import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()

describe("Test Case 8: Verify All Products and product detail page",()=>{
    it("Navigate to url and Verify that home page is visible successfully",()=>{
        cy.GoToUrl()
    })
    it("Click on 'Products' button",()=>{
        homepage.productbtn().click()
    })
    it("Verify user is navigated to ALL PRODUCTS page successfully",()=>{
        
    })

})