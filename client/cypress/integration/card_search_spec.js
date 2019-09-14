/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Card Search Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Searches for Jace', () => {

        cy.contains('Name')
            .get('[name=name]')
            .click()
            .type("Jace")

        cy.contains('Type')
            .get('[name=type]')
            .click()
            .type('planeswalker')

        cy.contains('Subtypes')
        cy.contains('SetName')

        cy.contains('Submit')
            .click()

        cy.contains('MTG CARD BACK')
    })

    it('Displays cards without images', () => {
        cy.contains('Submit').click()

    })

    it('Displays Load More button when there are over 100 items', () => {
        cy.contains('Submit').click();
        cy.contains('Load More')
    })
})