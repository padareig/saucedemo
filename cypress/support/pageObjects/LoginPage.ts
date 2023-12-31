
class LoginPage {
  //--------------------------------------------------------
  // Locators.
  //--------------------------------------------------------
  USER_NAME_INPUT = '[data-test="username"]';
  PASSWORD_INPUT = '[data-test="password"]';
  LOGIN_BUTTON = '[data-test="login-button"]';
  ERROR_HINT = '[data-test="error"]';

  //--------------------------------------------------------
  // Error strings.
  //--------------------------------------------------------
  lockedUserError = "Epic sadface: Sorry, this user has been locked out.";
  wrongCredentialsError = "Epic sadface: Username and password do not match any user in this service";
  requiredUsernameError = "Epic sadface: Username is required";
  requiredPasswordError = "Epic sadface: Password is required";
  //--------------------------------------------------------
  // Functions.
  //--------------------------------------------------------
  //

  /**
   * This function enters user's name string into input.
   *
   * @param {string} username - The user's name.
   */
  enterUsername(username: string): void {
    cy.get(this.USER_NAME_INPUT).type(username);
  }

  /**
   * This function enters user's password string into input.
   *
   * @param {string} password - The user's password.
   */
  enterPassword(password: string): void {
    cy.get(this.PASSWORD_INPUT).type(password);
  }

  /**
   * This function clicks the login button.
   */
  submitLogin(): void {
    cy.get(this.LOGIN_BUTTON).click();
  }

  /**
   * This function checks if the page is opened.
   */
  checkIfPageIsOpened(): void {
    cy.get(".login_logo").contains("Swag Labs").should("be.visible");
  }
}

export default new LoginPage();