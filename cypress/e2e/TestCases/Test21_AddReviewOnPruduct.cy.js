///<reference types="cypress" />
import productPage from "../PageObjectRepo/ProductPage"
import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage()
const productpage = new productPage()

describe("Test Case 21: Add review on product",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    it("Click on 'Products' button",()=>{
        homepage.productbtn().click()
    })
    it("Verify user is navigated to ALL PRODUCTS page successfully",()=>{
        productpage.header().should("have.text","All Products")
    })
    it("Click on 'View Product' button",()=>{
        productpage.viewProduct().eq(2).click()
    })
    it("Verify 'Write Your Review' is visible",()=>{
        productpage.reviewTitle().should("be.visible")
    })
    it("Enter name, email and review",()=>{
        productpage.reviewname().type("gsdhgf")
        productpage.reviewEmail().type("ad@gmail.com")
        productpage.reviewMessage().type("gdfggfdgh")
    })
    it("Click 'Submit' button",()=>{
        productpage.reviewsubmitBtn().click().wait(6000)
    })
    it("Verify success message 'Thank you for your review.'",()=>{
        
    })
   

})