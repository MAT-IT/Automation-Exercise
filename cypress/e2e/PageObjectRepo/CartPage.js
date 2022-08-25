import HomePage from "./HomePage"

class CartPage extends HomePage{
    
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
    proceedToCheckout(){
        return cy.get('.col-sm-6 > .btn')
    }
    checkoutRegisterLogin(){
        return cy.get('.modal-body > :nth-child(2) > a > u')
    }
    product_Price(){
        return cy.get('.cart_price p')
    }
    product_Quantity(){
        return cy.get('.cart_quantity')
    }
    product_TotalPrice(){
        return cy.get('.cart_total p')
    }
    adress_forDelivery(){
        return cy.get('#address_delivery > .address_country_name')
    }
    form(){
        return cy.get('.form-control')
    }
    placeOrderBtn(){
        return cy.get(':nth-child(7) > .btn') 
    }
    DeleteProductBtn(){
        return cy.get('.cart_quantity_delete')
    }
    VerifyDeletingProduct(){
        return cy.get('b')
    }
    cartproductNameList(){
        return cy.get ("tbody tr td[class='cart_description'] a")
    }
    
    
}
export default CartPage