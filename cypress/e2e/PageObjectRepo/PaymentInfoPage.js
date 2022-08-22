class Payment {
    CardName(){
        return cy.get(':nth-child(2) > .col-sm-12 > .form-control') 
    }
    CardNumber(){
        return cy.get(':nth-child(3) > .col-sm-12 > .form-control')
    }
    CardVerifCode(){
        return cy.get('.cvc > .form-control')
    }
    CardExpretionMounth(){
        return cy.get(':nth-child(2) > .form-control')
    } 
    CardExpretionYear(){
        return cy.get(':nth-child(3) > .form-control')
    }
    PayAndConfirmBtn(){
        return cy.get('#submit')
    } 

}

export default Payment