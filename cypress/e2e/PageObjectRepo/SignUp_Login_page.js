class signUpLoginPage {
    signUpFormHeader(){
        return cy.get('.signup-form > h2')
    }
    SignUpNameBox(){
        return cy.get('[type="text"]')
    }
    SignUpEmailBox(){
        return cy.get('.signup-form > form > [type="email"]')
    }
    SignUpButton(){
        return cy.get('.signup-form > form > .btn')
    }

    LoginHeader(){
        return cy.get('.login-form > h2')
    }
    LoginEmailBox(){
        return cy.get('.login-form > form > [type="email"]')
    }
    LoginPasswordBox(){
        return cy.get('[type="password"]')
    }
    LoginButton(){
        return cy.get('.login-form > form > .btn')
    }
    loggedInAs(){
        return cy.get(':nth-child(10) > a')
    }
    deleteAccount(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }
    Logout(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }
}
export default signUpLoginPage