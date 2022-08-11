class HomePage {
    logo(){
        return cy.get('a > img')
    }
    SignUploginButton(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
    ContactUsBotton(){
        return cy.get('.shop-menu > .nav > :nth-child(8) > a')
    }
}
export default HomePage;