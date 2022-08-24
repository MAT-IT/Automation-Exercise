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
      
    it("Add two products to Cart",()=>{
        //Click on 'Products' button
        homepage.productbtn().click()
        //Hover over first product and click 'Add to cart'
        productpage.allproductsforHover().eq(0).realHover('mouse')
        productpage.addToCartAfterHover().eq(0).click({force: true})
        //Click 'Continue Shopping' button
        productpage.CountinueShoppingBtn().click()
        //Hover over second product and click 'Add to cart'
        productpage.allproductsforHover().eq(1).realHover('mouse')
        productpage.addToCartAfterHover().eq(1).click({force: true})
        //Click 'View Cart' button
        productpage.ViewCartBtn().click()  
        //Verify both products are added to Cart
        cartpage.cartProductImage().should("have.length","2")
        for(let i=0 ;i<2 ;i++){
            //verify separetly product Quantity  product price
            cartpage.product_Price().eq(i).then(function(price){
                cy.log(price.text())  
                const productprice = Number(price.text().replace("Rs. ",""))
                cy.log(productprice)
                cy.wrap(productprice).as("productprice") 
            })
            cartpage.product_Quantity().eq(i).then(function(Quantity){
                cy.log(Quantity.text())  
                const ProductQuantity = Number(Quantity.text())
                cy.log(ProductQuantity)
                let productquantityprice = ProductQuantity*this.productprice
                cy.wrap(productquantityprice).as("productquantityprice") 
                
            })
           
            cartpage.product_TotalPrice().eq(i).then(function(Totalprice){
                cy.log(Totalprice.text())  
                const ProductTotalPrice = Number(Totalprice.text().replace("Rs. ",""))
                cy.log(ProductTotalPrice)
                cy.wrap(ProductTotalPrice).as("ProductTotalPrice") 
                expect(ProductTotalPrice).to.equal(this.productquantityprice )
            })
            
        }
        // 
        // cartpage.product_Price().eq(0).should("contain.text","Rs. 500")
        // cartpage.product_Price().eq(1).should("contain.text","Rs. 400")
        // //verify separetly product Quantity
        // cartpage.product_Quantity().eq(0).should("contain.text","1")
        // cartpage.product_Quantity().eq(1).should("contain.text","1")
        //  //this method is Converting the string to number 
        //  cartpage.product_Price().eq(0).then(function(price){
        //     cy.log(price.text())  
        //     const price1 = Number(price.text().replace("Rs. ",""))
        //     cy.log(price1)
        //     cy.wrap(price1).as("price1")            
        // })

    })
      
})