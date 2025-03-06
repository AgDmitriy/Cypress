import { faker } from '@faker-js/faker';

describe('Registration test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('button[class*="btn-primary"]').click();
    }) 

    describe('Verify "Name" field validations', () => {
        it('Verify Name empty field', () => {
            cy.get('#signupName').click().blur();
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name required');
        });

        it('Verify low data input for Name field', () => {
            cy.get('#signupName').type('a').blur();
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('Verify high data input for Name field', () => {
            cy.get('#signupName').type('twentyonecharactercountname').blur();
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('Verify Trim in input for Name field', () => {
            cy.get('#signupName').type('a   ').blur();
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name is invalid');
        });

        it('Verify spaces in input for Name field', () => {
            cy.get('#signupName').type('String with spaces').blur();
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name is invalid');
        });

        it('Verify not English letters for Name field', () => {
            cy.get('#signupName').type('НеІнглішЛеттерс').blur();
            cy.get('#signupName + .invalid-feedback').should('have.text', 'Name is invalid');
        });
    });

    describe('Verify "Last name" field validations', () => {
        it('Verify empty "Last name" field input', () => {
            cy.get('#signupLastName').click().blur();
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name required');
        });

        it('Verify low data input for Last name field', () => {
            cy.get('#signupLastName').type('a').blur();
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('Verify high data input for Last name field', () => {
            cy.get('#signupLastName').type('twentyonecharactercountname').blur();
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('Verify Trim in input for Last name field', () => {
            cy.get('#signupLastName').type('a   ').blur();
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name is invalid');
        });

        it('Verify spaces in input for Last name field', () => {
            cy.get('#signupLastName').type('String with spaces').blur();
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name is invalid');
        });

        it('Verify not English letters for Last name field', () => {
            cy.get('#signupLastName').type('НеІнглішЛеттерс').blur();
            cy.get('#signupLastName + .invalid-feedback').should('have.text', 'Last name is invalid');
        });

        describe('Verify "Email" field validations', () => {
            it('Verify empty "Email" field input', () => {
                cy.get('#signupEmail').click();
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email required');
            });
        
            it('Verify without @ symbol input Email field validation', () => {
                cy.get('#signupEmail').type('WithoutEmailsymbol');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        
            it('Verify without dot after @ symbol input Email field validation', () => {
                cy.get('#signupEmail').type('WithoutDotAfter@symbol');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        
            it('Verify without chars before @ symbol input Email field validation', () => {
                cy.get('#signupEmail').type('@NoTextBefo.re');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        
            it('Verify 1 char after dot input Email field validation', () => {
                cy.get('#signupEmail').type('OneChar@afte.r');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        
            it('Verify 1+space char after dot input Email field validation', () => {
                cy.get('#signupEmail').type('Space@afte.r ');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        
            it('Verify not English letters for Email field validation', () => {
                cy.get('#signupEmail').type('НеІнглішЛеттерс@емейл.ком');
                cy.get('#signupEmail').blur();
                cy.get('#signupEmail + .invalid-feedback').should('have.text', 'Email is incorrect');
            });
        });
        

        describe('Verify "Password" field validations', () => {
            it('Verify empty "Password" field validation', () => {
                cy.get('#signupPassword').click();
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password required');
            });
        
            it('Verify low input for "Password" field validation', () => {
                cy.get('#signupPassword').type('Seven7!');
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });
        
            it('Verify high input for "Password" field validation', () => {
                cy.get('#signupPassword').type('sixteenChars-16!');
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });
        
            it('Verify all small letters input for "Password" field validation', () => {
                cy.get('#signupPassword').type('allsmallletters1!');
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });
        
            it('Verify all capital letters input for "Password" field validation', () => {
                cy.get('#signupPassword').type('ALLCAPITAL!1');
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });
        
            it('Verify all digits input for "Password" field validation', () => {
                cy.get('#signupPassword').type('123456789');
                cy.get('#signupPassword').blur();
                cy.get('#signupPassword + .invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            });
        });

        describe('Verify "Re-enter Password" field validations', () => {
            it('Verify empty "Re-enter password" field validation', () => {
                cy.get('#signupRepeatPassword').click().blur();
                cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupRepeatPassword + .invalid-feedback').should('have.text', 'Re-enter password required');
            });
        
            it('Verify "Re-enter password" field not matches "Password" validation', () => {
                cy.get('#signupPassword').type('ValidValue1');
                cy.get('#signupRepeatPassword').type('ValidValue2').blur();
                cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('#signupRepeatPassword + .invalid-feedback').should('have.text', 'Passwords do not match');
            });
        });
    
        describe('Positive registration flow', () => {
            beforeEach(() => {
                cy.visit('/');
                cy.get('button[class*="btn-primary"]').click();
            });
        
            it('should successfully register a new user', () => {
                const firstName = faker.person.firstName();
                const lastName = faker.person.lastName();
                const email = faker.internet.email();
                const password = 'ValidPass1';
        
                cy.get('#signupName').type(firstName);
                cy.get('#signupLastName').type(lastName);
                cy.get('#signupEmail').type(email);
                cy.get('#signupPassword').type(password);
                cy.get('#signupRepeatPassword').type(password);
        
                cy.get('.modal-footer button')
                    .should('be.visible')
                    .should('not.be.disabled')
                    .and('have.text', 'Register')
                    .click();

                cy.get('[routerlink="settings"]').should('be.visible');
                cy.get('.alert > p').should('be.visible');
            });
        });
    });
});