class AccountInfo {
    enteraccountinfo(){
        return cy.get(':nth-child(1) > b')
    }
    titlecheck(){
        return cy.get('.clearfix')
    }
    titleMr(){
        return cy.get(':nth-child(3) > .top')
    }
    titleMrs(){
        return cy.get(':nth-child(4) > .top')
    }
    namebox(){
        return cy.get('#name')
    }
    emailbox (){
        return cy.get('#email')
    }
    passwordbox(){
        return cy.get('#password')
    }
    dobdays(){
        return cy.get('#days')
    }
    dobmonths(){
        return cy.get('#months')
    }
    dobyears(){
        return cy.get('#years')
    }
    newletterscheckbox(){
        return cy.get('#newsletter')
    }
    offercheckbox(){
        return cy.get('#optin')
    }
    adressfirstname(){
        return cy.get('#first_name')
    }
    adresslastname(){
        return cy.get('#last_name')
    }
    adresscompany(){
        return cy.get('#company')
    }
    adressline1(){
        return cy.get('#address1')
    }
    adressline2(){
        return cy.get('#address2')
    }
    adresscountryselectbox(){
        return cy.get('#country')
    }
    adressstate(){
        return cy.get('#state')
    }
    adresscity(){
        return cy.get('#city')
    }
    adresszipcode(){
        return cy.get('#zipcode')
    }
    adressmobilenumber(){
        return cy.get('#mobile_number')
    }
    createaccountbutton(){
        return cy.get('.login-form > form > .btn')
    }

}

export default AccountInfo