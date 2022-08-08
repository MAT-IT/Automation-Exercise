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
}
export default signUpLoginPage