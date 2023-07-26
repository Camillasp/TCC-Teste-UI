/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro de Usuário', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer o Cadastro com Sucesso', () => {
        let emailFaker = faker.internet.email(nomeFaker)
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o pré-cadastro usando Comandos Customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Aluno', 'EBAC')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
   
})