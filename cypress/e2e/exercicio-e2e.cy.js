/// <reference types="cypress" />
import {faker} from '@faker-js/faker'

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
      
        const email = faker.internet.email()
        const password = faker.internet.password()
        const name = faker.person.firstName()
        const lastName = faker.person.lastName()
        const location = faker.location.streetAddress()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
        cy.visit('produtos')
        cy.get('.page-title').should('contain', 'Produtos')
        cy.get('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Ariel Roll Sleeve Sweatshirt{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Josie Yoga Jacket{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.search').type('Autumn Pullie{enter}')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').type('{enter}')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type(name).click()
        cy.get('#billing_last_name').type(lastName).click()
        cy.get('#billing_address_1').type(location).click()
        cy.get('#billing_city').type('São José').click()
        cy.get('#billing_postcode').type('88102-001').click()
        cy.get('#billing_phone').type('48999999999').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()


  });

});

 
    
      
  


