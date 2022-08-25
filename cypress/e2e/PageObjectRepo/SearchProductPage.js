class searchProductPage{
    productList(){
        return cy.get('.single-products')
    }
    productNameList(){
        return cy.get("div[class='productinfo text-center'] p")
    }
}

export default searchProductPage