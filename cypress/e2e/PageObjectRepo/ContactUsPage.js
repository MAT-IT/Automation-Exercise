class contactUsPage {
    GetInTouch(){
        return cy.get('div.contact-form > .title')
    }
    name(){
        return cy.get(':nth-child(2) > .form-control') 
    }
    email(){
        return cy.get(':nth-child(3) > .form-control') 
    }
    subject(){
        return cy.get(':nth-child(4) > .form-control') 
    }
    message(){
        return cy.get('#message')
    }
    selectFile(){
        return cy.get(':nth-child(6) > .form-control')
    }
    submitBtn(){
        return cy.get(':nth-child(7) > .btn')
    }
    status(){
        return cy.get('.status')
    }

    backhomepage(){
        return cy.get('#form-section > .btn')
    }



}
export default contactUsPage