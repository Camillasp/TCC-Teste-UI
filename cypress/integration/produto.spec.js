/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
    });

    afterEach(() => {
        cy.visit('carrinho')
    });
   
    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Balboa Persistence Tee', 'XS', 'Gray', 1)
        cy.get('.woocommerce-form > .button').click()
        cy.get('woocommerce-message').should('contain', '"Balboa Persistence Tee" foi adicionado no seu carrinho.')
    }); 


    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Beaumont Summit Kit', 'XL', 'Yellow', 1)
        cy.get('.woocommerce-form > .button').click()
        cy.get('woocommerce-message').should('contain', '"Beaumont Summit Kit" foi adicionado no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Caesar Warm-Up Pant', '36', 'Gray', 1)
        cy.get('.woocommerce-form > .button').click()
        cy.get('woocommerce-message').should('contain', '"Caesar Warm-Up Pant" foi adicionado no seu carrinho.')
    });

})