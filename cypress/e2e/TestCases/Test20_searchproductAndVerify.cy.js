///<reference types="cypress" />
import productPage from "../PageObjectRepo/ProductPage"
import HomePage from "../PageObjectRepo/HomePage"
import searchProductPage from "../PageObjectRepo/SearchProductPage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage()
const productpage = new productPage()
const searchproduct= new searchProductPage()
const cartpage = new CartPage()

describe("Test Case 20: Search Products and Verify Cart After Login",()=>{
    it("Navigate to url ",()=>{
        cy.GoToUrl()
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
        productpage.productTitle().should("be.visible")
    })
    it("add to cart , login and verify",()=>{
       //Verify all the products related to search are visible
       var productName = []
       searchproduct.productNameList()
                .then(function(item){
                    const itemCount=Cypress.$(item).length;
                    cy.log(itemCount)
                    for (var i = 0; i < itemCount; i++) {
                        searchproduct.productList()
                            .eq(i).should('contain.text', "Jeans")
                        //urun isimlerini al arraye at
                        var name = item.eq(i).text()
                        productName.push(name)

                        //Add those products to cart
                        productpage.allproductsforHover().eq(i).realHover('mouse')
                        productpage.addToCartAfterHover().eq(i).click({force: true})
                    
                   }
                })
        productName.sort()      
        cy.log(productName)       
        
        //Click 'Cart' button and verify that products are visible in cart
        productpage.ViewCartBtn().click()

        //Click 'Signup / Login' button and submit login details
        cartpage.SignUploginButton().click()
        cy.LogIn()
        //Again, go to Cart page
        homepage.cartBtn().click() 
        //cart a eklenen urunlerin isimlerini al assert yap
        var cartNameArr=[]
        cartpage.cartproductNameList().then(function(items){
            const itemCount=Cypress.$(items).length;
            for (let i = 0; i < itemCount; i++) {
                var name = items.eq(i).text()
                cartNameArr.push(name)                
            }
            
        
        })
        cartNameArr.sort()
        cy.log(cartNameArr)
        expect(productName).to.be.eql(cartNameArr)
        
        
    })

})