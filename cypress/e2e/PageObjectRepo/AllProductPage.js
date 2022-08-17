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
    
}
export default productPage