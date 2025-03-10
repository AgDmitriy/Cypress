import { faker } from '@faker-js/faker';
import SignUpForm from '../../page-object/Forms/SignUpForm';
import HomePage from '../../page-object/Pages/HomePage';
import GaragePage from '../../page-object/Pages/GaragePage';

describe('Registration test', () => {
    beforeEach(() => {
        cy.visit('/');
        HomePage.clickSignUp();
    });

    describe('Verify "Name" field validations', () => {
        it('Verify Name empty field', () => {
            SignUpForm.clickNameInput();
            SignUpForm.elements.nameInput().blur();
            SignUpForm.elements.nameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getNameInputErrorText().should('have.text', 'Name required');
        });

        it('Verify low data input for Name field', () => {
            SignUpForm.fillNameInput('a');
            SignUpForm.elements.nameInput().blur();
            SignUpForm.elements.nameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getNameInputErrorText().should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('Verify high data input for Name field', () => {
            SignUpForm.fillNameInput('twentyonecharactercountname');
            SignUpForm.elements.nameInput().blur();
            SignUpForm.getNameInputErrorText().should('have.text', 'Name has to be from 2 to 20 characters long');
        });

        it('Verify Trim in input for Name field', () => {
            SignUpForm.fillNameInput('a   ');
            SignUpForm.elements.nameInput().blur();
            SignUpForm.elements.nameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getNameInputErrorText().should('have.text', 'Name is invalid');
        });

        it('Verify spaces in input for Name field', () => {
            SignUpForm.fillNameInput('String with spaces');
            SignUpForm.elements.nameInput().blur();
            SignUpForm.getNameInputErrorText().should('have.text', 'Name is invalid');
        });

        it('Verify not English letters for Name field', () => {
            SignUpForm.fillNameInput('НеІнглішЛеттерс');
            SignUpForm.elements.nameInput().blur();
            SignUpForm.getNameInputErrorText().should('have.text', 'Name is invalid');
        });
    });

    describe('Verify "Last name" field validations', () => {
        it('Verify empty "Last name" field input', () => {
            SignUpForm.clickLastNameInput();
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.elements.lastNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name required');
        });

        it('Verify low data input for Last name field', () => {
            SignUpForm.fillLastNameInput('a');
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('Verify high data input for Last name field', () => {
            SignUpForm.fillLastNameInput('twentyonecharactercountname');
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name has to be from 2 to 20 characters long');
        });

        it('Verify Trim in input for Last name field', () => {
            SignUpForm.fillLastNameInput('a   ');
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name is invalid');
        });

        it('Verify spaces in input for Last name field', () => {
            SignUpForm.fillLastNameInput('String with spaces');
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name is invalid');
        });

        it('Verify not English letters for Last name field', () => {
            SignUpForm.fillLastNameInput('НеІнглішЛеттерс');
            SignUpForm.elements.lastNameInput().blur();
            SignUpForm.getLastNameInputErrorText().should('have.text', 'Last name is invalid');
        });
    });

    describe('Verify "Email" field validations', () => {
        it('Verify empty "Email" field input', () => {
            SignUpForm.clickEmailInput();
            SignUpForm.elements.emailInput().blur();
            SignUpForm.elements.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email required');
        });

        it('Verify without @ symbol input Email field validation', () => {
            SignUpForm.fillEmailInput('WithoutEmailsymbol');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });

        it('Verify without dot after @ symbol input Email field validation', () => {
            SignUpForm.fillEmailInput('WithoutDotAfter@symbol');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });

        it('Verify without chars before @ symbol input Email field validation', () => {
            SignUpForm.fillEmailInput('@NoTextBefo.re');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });

        it('Verify 1 char after dot input Email field validation', () => {
            SignUpForm.fillEmailInput('OneChar@afte.r');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });

        it('Verify 1+space char after dot input Email field validation', () => {
            SignUpForm.fillEmailInput('Space@afte.r ');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });

        it('Verify not English letters for Email field validation', () => {
            SignUpForm.fillEmailInput('НеІнглішЛеттерс@емейл.ком');
            SignUpForm.elements.emailInput().blur();
            SignUpForm.getEmailInputErrorText().should('have.text', 'Email is incorrect');
        });
    });


    describe('Verify "Password" field validations', () => {
        it('Verify empty "Password" field validation', () => {
            SignUpForm.clickPasswordInput();
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.elements.passwordInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password required');
        });
    
        it('Verify low input for "Password" field validation', () => {
            SignUpForm.fillPasswordInput('Seven7!');
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
    
        it('Verify high input for "Password" field validation', () => {
            SignUpForm.fillPasswordInput('sixteenChars-16!');
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
    
        it('Verify all small letters input for "Password" field validation', () => {
            SignUpForm.fillPasswordInput('allsmallletters1!');
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
    
        it('Verify all capital letters input for "Password" field validation', () => {
            SignUpForm.fillPasswordInput('ALLCAPITAL!1');
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
    
        it('Verify all digits input for "Password" field validation', () => {
            SignUpForm.fillPasswordInput('123456789');
            SignUpForm.elements.passwordInput().blur();
            SignUpForm.getPasswordInputErrorText().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        });
    });
    
    describe('Verify "Re-enter Password" field validations', () => {
        it('Verify empty "Re-enter password" field validation', () => {
            SignUpForm.clickReEnterPasswordInput();
            SignUpForm.elements.reEnterPasswordInput().blur();
            SignUpForm.elements.reEnterPasswordInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getReEnterPasswordInputErrorText().should('have.text', 'Re-enter password required');
        });
    
        it('Verify "Re-enter password" field not matches "Password" validation', () => {
            SignUpForm.fillPasswordInput('ValidValue1');
            SignUpForm.fillReEnterPasswordInput('ValidValue2');
            SignUpForm.elements.reEnterPasswordInput().blur();
            SignUpForm.elements.reEnterPasswordInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
            SignUpForm.getReEnterPasswordInputErrorText().should('have.text', 'Passwords do not match');
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
    
            SignUpForm.fillNameInput(firstName);
            SignUpForm.fillLastNameInput(lastName);
            SignUpForm.fillEmailInput(email);
            SignUpForm.fillPasswordInput(password);
            SignUpForm.fillReEnterPasswordInput(password);
    
            SignUpForm.registerButton()
                .should('be.visible')
                .should('not.be.disabled')
                .and('have.text', 'Register')
                .click();
    
            cy.get('[routerlink="settings"]').should('be.visible');
            cy.get('.alert > p').should('be.visible');
        });
    });
});