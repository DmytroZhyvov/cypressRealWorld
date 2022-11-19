import { login, loginViaAPI } from '../support/helper';
import HomePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';


beforeEach('Login', () => {
  // login();
  loginViaAPI(user);
})

describe('User can', () => {
  it('verify login helper', {retries: 3}, () => {
    HomePage.visit();
    HomePage.getProfileButton().should('be.visible');
  })
})