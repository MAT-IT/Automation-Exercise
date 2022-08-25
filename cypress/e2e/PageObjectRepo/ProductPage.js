import HomePage from "./HomePage"

class productPage extends HomePage{
    header(){
        return cy.get('.title')
    }
    allproductCart(){
        return cy.get(".features_items .col-sm-4")
    }
    allproductsforHover(){
        return cy.get("div[class='productinfo text-center']")
    }
    addToCartAfterHover(){
        return cy.get("div[class='product-overlay'] i[class='fa fa-shopping-cart']")
    }
    wievfirtproduct(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    }
    wievproductname(){
        return cy.get('.product-information > h2')
    }
    wievproductCategory(){
        return cy.get('.product-information > :nth-child(3)')
    }
    viewProductQuantityLabel(){
        return cy.get('label')
    }
    viewProductQuantity(){
        return cy.get('#quantity')
    }
    wievproductPrice(){
        return cy.get(':nth-child(5) > span')
    }
    wievproductAvailability(){
        return cy.get('.product-information > :nth-child(6)')
    }
    wievproductCondition(){
        return cy.get('.product-information > :nth-child(7)')
    }
    wievproductBrand(){
        return cy.get('.product-information > :nth-child(8)')
    }
    searchInputBox(){
        return cy.get('#search_product')
    }
    searchButton(){
        return cy.get('#submit_search')
    }
    AddToCartBtn(){
        return cy.get("a[class='btn btn-default add-to-cart']")
    }
    addtocartbtn(){
        return cy.get(':nth-child(5) > .btn')
    }
    CountinueShoppingBtn(){
        return cy.get('.modal-footer > .btn')
    }
    ViewCartBtn(){
        return cy.get('u')
    }
    categoryWomenDress(){
        return cy.get('#Women > .panel-body > ul > :nth-child(1) > a') 
    }
    categoryManTshirts(){
        return cy.get('#Men > .panel-body > ul > :nth-child(1) > a') 
    }
    productTitle(){
        return cy.get('.title') 
    }
    brandsHeader(){
        return cy.get('.brands_products > h2') 
    }
    brandsName(){
        return cy.get("div[class='brands-name'] ul li") 
    }
    reviewTitle(){
        return cy.get('.active > a')
    }
    reviewname(){
        return cy.get('#name')
    }
    reviewEmail(){
        return cy.get('#email')
    }
    reviewMessage(){
        return cy.get('#review')
    }
    reviewsubmitBtn(){
        return cy.get('#button-review')
    }
}
export default productPage