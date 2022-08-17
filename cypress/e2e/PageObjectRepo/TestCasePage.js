class TestCasePage{
    header(){
        return cy.get('b')
    }
    testcasesCount(){
        return cy.get(".panel-heading h4 u")
    }
}
export default TestCasePage