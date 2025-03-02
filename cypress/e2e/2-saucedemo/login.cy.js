/// <reference types="cypress" />

describe('Login from tests', () => {
    const correctUserName = 'standard_user';
    const correctUserPassword = 'secret_sauce';


    beforeEach(() => {
        cy.visit('/')

    })

    it.only('Login with correct credentials', () => {
        
        cy.get('[data-test="username"]').type(correctUserName);
        cy.get('[data-test="password"]').type(correctUserPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');

    });

    
    it('Login with incorrect credentials', () => {
        let incorrectUser = 'incorrect';
        let randomPassword = '123456';

        cy.get('[data-test="username"]').type(incorrectUser);
        cy.get('[data-test="password"]').type(randomPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });


})