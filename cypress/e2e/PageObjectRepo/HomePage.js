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
    TestCaseBtn(){
        return cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
    }
    productbtn(){
        return cy.get('.shop-menu > .nav > :nth-child(2) > a')
    }
    subscriptionTitle(){
        return cy.get('.single-widget > h2')
    }
    subscripEmailBox(){
        return cy.get('#susbscribe_email')
    }
    subscripButton(){
        return cy.get('#subscribe')
    }
    cartBtn(){
        return cy.get('.shop-menu > .nav > :nth-child(3) > a')
    }
}
export default HomePage;