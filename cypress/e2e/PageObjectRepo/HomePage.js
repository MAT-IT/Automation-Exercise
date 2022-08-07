class HomePage {
    logo(){
        return cy.get('a > img')
    }
    loginButton(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
}
export default HomePage;