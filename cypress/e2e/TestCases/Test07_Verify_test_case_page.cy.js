///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"
import TestCasePage from "../PageObjectRepo/TestCasePage"



const homepage = new HomePage()
const testcasepage =new TestCasePage()

describe("Test Case 7: Verify Test Cases Page",()=>{
    it("Navigate to url",()=>{
        cy.GoToUrl()
    })
    it("Verify that home page is visible successfully",()=>{
        homepage.logo().should("be.visible")
        cy.title("includes","Automation")
    })
    it("Click on 'Test Cases' button",()=>{
        homepage.TestCaseBtn().click()
    })
    it("Verify user is navigated to test cases page successfully",()=>{
        testcasepage.header().should("have.text","Test Cases")
    })
    it("test case lenght verify",()=>{
        testcasepage.testcasesCount().then(function(item){
            const itemCount = Cypress.$(item).length;
            testcasepage.testcasesCount().should("have.length",itemCount)
            
        })
    })

})