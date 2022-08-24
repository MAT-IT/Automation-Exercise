///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import productPage from "../PageObjectRepo/ProductPage"

const homepage = new HomePage()
const product = new productPage()

describe("Test Case 19: View & Cart Brand Products",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
    })
    
    it("Product is selected via brand",()=>{
       //Click on 'Products' button
        homepage.productbtn().click()
       //Verify that Brands are visible on left side bar
        product.brandsHeader().should("be.visible")
       //Click on whole brand name and verify  
       product.brandsName().then(($el) => { 
        const itemCount = Cypress.$($el).length;
        cy.log(itemCount)
        for (let i = 0 ; i< itemCount;i++){
            product.brandsName().eq(i).then(function(item){
                let brandname = item.text()
                brandname =brandname.replace(brandname.substring(0,4),"")       
                cy.log(brandname)
                cy.wrap(brandname).as("brandname")
               })
               product.brandsName().eq(i).click()
               //Verify that user is navigated to brand page and brand products are displayed
                product.productTitle().then(function(item){
                let title =item.text()
                cy.log(title)
               expect(title).to.contain(this.brandname)
            })
        }
    })

      
    })
    
    
})