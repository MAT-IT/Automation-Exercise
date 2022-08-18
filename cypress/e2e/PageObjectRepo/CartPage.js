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
    cartProduct(){
        return cy.get('.cart_product')
    }
}
export default CartPage