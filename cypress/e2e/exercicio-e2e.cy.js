/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
        cy.visit('minha-conta')
  });

  it('Fluxo de teste parte 1', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      
        
        const name = faker.person.firstName()
        const lastName = faker.person.lastName()
        const location = faker.location.streetAddress()
        cy.registrarUsuarioFaker()
        cy.visit('produtos')
        cy.get('.search').type('Arcadio Gym Short{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.post-3528 > .product-block').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Stellar Solar Jacket{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Augusta Pullover Jacket{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Autumn Pullie{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.preencherCheckoutFaker()
        
        });
});

 

 



  


