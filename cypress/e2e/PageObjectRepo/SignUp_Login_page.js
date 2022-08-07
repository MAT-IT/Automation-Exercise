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
}
export default signUpLoginPage