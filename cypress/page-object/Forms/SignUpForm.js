class SignUpForm {
    
    elements = {
      nameInput: () => cy.get("#signupName"),
      lastNameInput: () => cy.get("#signupLastName"),
      emailInput: () => cy.get("#signupEmail"),
      passwordInput: () => cy.get("#signupPassword"),
      reEnterPasswordInput: () => cy.get("#signupRepeatPassword"),
      registerButton: () => cy.get(".modal-footer button"),
    };
  
  
    clickNameInput() {
      this.elements.nameInput().click();
    }
  
    fillNameInput(name) {
      this.elements.nameInput().click();
      this.elements.nameInput().type(name);
    }
  
    getNameInputErrorText() {
      return cy.get("#signupName + .invalid-feedback");
    }
  
    clickLastNameInput() {
      this.elements.lastNameInput().click();
    }
  
    fillLastNameInput(lastName) {
      this.elements.lastNameInput().type(lastName);
    }
  
    getLastNameInputErrorText() {
      return cy.get("#signupLastName + .invalid-feedback");
    }
  
    clickEmailInput() {
      this.elements.emailInput().click();
    }
  
    fillEmailInput(email) {
      this.elements.emailInput().type(email);
    }
  
    getEmailInputErrorText() {
      return cy.get("#signupEmail + .invalid-feedback");
    }
  
    clickPasswordInput() {
      this.elements.passwordInput().click();
    }
  
    fillPasswordInput(password) {
      this.elements.passwordInput().type(password);
    }
  
    getPasswordInputErrorText() {
      return cy.get("#signupPassword + .invalid-feedback");
    }
  
    clearPasswordInput() {
      this.elements.passwordInput().clear();
    }
  
    clickReEnterPasswordInput() {
      this.elements.reEnterPasswordInput().click();
    }
  
    fillReEnterPasswordInput(reEnterPassword) {
      this.elements.reEnterPasswordInput().type(reEnterPassword);
    }
  
    getReEnterPasswordInputErrorText() {
      return cy.get("#signupRepeatPassword + .invalid-feedback");
    }
  
    clearReEnterPasswordInput() {
      this.elements.reEnterPasswordInput().clear();
    }
  
    clickRegisterButton() {
      this.elements.registerButton().click();
    }
  
    getAlertDangerMessageText() {
      return cy.get(".alert");
    }
  }
  
  export default new SignUpForm();