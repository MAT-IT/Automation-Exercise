class CartPage{
    subsHeader(){
        return cy.get('h2')
    }
    subsEmailBox(){
        return cy.get('#susbscribe_email')
    }
    subsBtn(){
        return cy.get('#subscribe')
    }
    footContainer(){
        return cy.get('.footer-widget > .container')
    }
    cartProductImage(){
        return cy.get('.product_image')
    }
}
export default CartPage