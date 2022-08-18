class productPage {
    header(){
        return cy.get('.title')
    }
    allproductCart(){
        return cy.get(".features_items .col-sm-4")
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
}
export default productPage