// Test Case 7: Verify Test Cases Page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

///<reference types="cypress" />

import HomePage from "../PageObjectRepo/HomePage"

const homepage = new HomePage
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
        cy.get('span')
        .should("have.text","Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:")
    })
    it("test case lenght verify",()=>{
        cy.get(".panel-heading h4 u").should("have.length",26)
    })

})