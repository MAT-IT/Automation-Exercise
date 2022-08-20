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
    it("Add two products to Cart",()=>{
        //Hover over first product and click 'Add to cart'
        cy.get("div[class='productinfo text-center']").eq(0).realHover('mouse')
        cy.get("div.overlay-content a[data-product-id='1']").click({force: true})
        //Click 'Continue Shopping' button
        productpage.CountinueShoppingBtn().click()
        //Hover over second product and click 'Add to cart'
        cy.get("div[class='productinfo text-center']").eq(1).realHover('mouse')
        cy.get("div.overlay-content a[data-product-id='2']").click({force: true})
        //Click 'View Cart' button
        productpage.ViewCartBtn().click()        
    })
    it("Verify both products are added to Cart",()=>{
        cartpage.cartProductImage().should("have.length","2")
    })
    it("Verify their prices, quantity and total price",()=>{
        //verify separetly product price
        cartpage.product_Price().eq(0).should("contain.text","Rs. 500")
        cartpage.product_Price().eq(1).should("contain.text","Rs. 400")
        //verify separetly product Quantity
        cartpage.product_Quantity().eq(0).should("contain.text","1")
        cartpage.product_Quantity().eq(1).should("contain.text","1")
        //this method is Converting the string to number 
        cartpage.product_Price().eq(0).then(function(price){
            cy.log(price.text())  
            const price1 = Number(price.text().replace("Rs.",""))
            cy.wrap(price1).as("price1")
            
        })

        
    })
    
})