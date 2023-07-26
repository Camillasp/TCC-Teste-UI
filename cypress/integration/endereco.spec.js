/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco-page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereço - Futuramento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].endereco,
            dadosEndereco[3].numero,
            dadosEndereco[3].pais,
            dadosEndereco[3].cidade,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            dadosEndereco[3].telefone,
            dadosEndereco[3].email
        )

    });

});

