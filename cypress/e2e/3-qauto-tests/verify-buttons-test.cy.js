/// <reference types="cypress" />

describe('Buttons find test', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('find header buttons - Sign In', () => {
        cy.get('.header_right > .btn')
            .should('be.visible')
            .and('have.text', 'Sign In')
    });

    it('find header buttons - Guest log in', () => {
        cy.get('.header_right > .header-link')
            .should('be.visible')
            .and('have.text', 'Guest log in')
    })

    it('find header buttons - Sign up', () => {
        cy.get('.hero-descriptor_btn')
            .should('be.visible')
            .and('have.text', 'Sign up')
    })

    it("verify social buttons", () => {
        cy.get('[href="https://www.facebook.com/Hillel.IT.School"] > .socials_icon')
            .should("be.visible")
            .parent()
            .should("have.attr", "href", "https://www.facebook.com/Hillel.IT.School");

        cy.get('[href="https://t.me/ithillel_kyiv"] > .socials_icon')
            .should("be.visible")
            .parent()
            .should("have.attr", "href", "https://t.me/ithillel_kyiv");

        cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"] > .socials_icon')
            .should("be.visible")
            .parent()
            .should("have.attr", "href", "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1");

        cy.get('[href="https://www.instagram.com/hillel_itschool/"] > .socials_icon')
            .should("be.visible")
            .parent()
            .should("have.attr", "href", "https://www.instagram.com/hillel_itschool/");

        cy.get('[href="https://www.linkedin.com/school/ithillel/"] > .socials_icon')
            .should("be.visible")
            .parent()
            .should("have.attr", "href", "https://www.linkedin.com/school/ithillel/");
    });
});