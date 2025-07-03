/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

// Comando customizado para registrar usuário com dados aleatórios
Cypress.Commands.add('registrarUsuarioFaker', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()

  cy.get('#reg_email').type(email)
  cy.get('#reg_password').type(password)
  cy.get(':nth-child(4) > .button').click()

})

Cypress.Commands.add('preencherCheckoutFaker', () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const address = faker.location.streetAddress()
  const city = 'São José'
  const cep = '88102-001'
  const telefone = '48999999999'

  cy.get('#billing_first_name').type(firstName)
  cy.get('#billing_last_name').type(lastName)
  cy.get('#billing_address_1').type(address)
  cy.get('#billing_city').type(city)
  cy.get('#billing_postcode').type(cep)
  cy.get('#billing_phone').type(telefone)
  cy.get('#terms').click()
  cy.get('#place_order').click()

  cy.wait(8000)
  cy.get('.woocommerce-order').should('contain', 'Obrigado. Seu pedido foi recebido.')
})






