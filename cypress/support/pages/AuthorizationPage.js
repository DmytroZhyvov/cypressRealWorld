class AuthorizationPage{
  visit() {
    cy.visit('/user/login');
  }

  getLoginField(){
    return cy.get('[type="email"]');
  }

  getPasswordField(){
    return cy.get('[type="password"]');
  }

  getSubmitButton(){
    return cy.get('[type="submit"]');
  }

  submitLoginForm(email, password){
    this.getLoginField().type(email);
    this.getPasswordField().type(password);
    this.getSubmitButton().click();
  }

}

export default new AuthorizationPage();