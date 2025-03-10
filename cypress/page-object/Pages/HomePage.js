class HomePage {

    elements = {
        signInButton: () => cy.get('button.header_signin'),
        signUpButton: () => cy.get('button[class*="btn-primary"]'),

        //   emailLoginInput: () => cy.get('input[type="email"]'),
        //   passwordLoginInput: () => cy.get('input[type="password"]'),
        //   loginButton: () => cy.get('.btn-primary'),

        emailLoginInput: () => cy.get('#signinEmail'),
        passwordLoginInput: () => cy.get('#signinPassword'),
        loginButton: () => cy.get('button[class="btn btn-primary"]'),

        footerSection: () => cy.get('.footer'),
        facebookButton: () => cy.get('span[class$="icon-facebook"]'),
        telegramButton: () => cy.get('span[class$="icon-telegram"]'),
        youtubeButton: () => cy.get('span[class$="icon-youtube"]'),
        instagramButton: () => cy.get('span[class$="icon-instagram"]'),
        linkedinButton: () => cy.get('span[class$="icon-linkedin"]'),
    };

    clickSignIn() {
        this.elements.signInButton().click();
    }

    clickSignUp() {
        this.elements.signUpButton().click();
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    loginWitCreds(email, password) {
        this.clickSignIn();
        this.elements.emailLoginInput().type(email);
        this.elements.passwordLoginInput().type(password);
        this.elements.loginButton().click();
        cy.get('div[class="alert alert-success"]').should('be.visible');
    }
}

export default new HomePage();