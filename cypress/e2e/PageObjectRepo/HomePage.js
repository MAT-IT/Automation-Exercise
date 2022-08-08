class HomePage {
    logo(){
        return cy.get('a > img')
    }
    SignUploginButton(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
}
export default HomePage;