/// <reference types="cypress" />

const perfil = require ('../fixtures/perfil.json')

beforeEach(() => {
    cy.visit('minha-conta')
});

context('Funcionalidade Login', () => {
    
    it('Deve fazer Login - Usando Arquivos de Dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha Conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac(Não é aluno_ebac? Sair)')
        
    });

    it('Deve fazer Login - Usando Fixture', () => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha Conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac(Não é aluno_ebac? Sair)')

    });

    it('Deve Exibir uma Mensagem de Erro ao Inserir Usuário Inválido', () => {
        cy.get('#username').type('alunooo.ebac@teste.com')
        cy.get('#password').type('teste@teste.com', {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha Conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Usuário ou senha inválidos')
 
    });

    it('Deve Exibir uma Mensagem de Erro ao Inserir Senha Inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('t@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha Conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Usuário ou senha inválidos')
 
    });
     
});