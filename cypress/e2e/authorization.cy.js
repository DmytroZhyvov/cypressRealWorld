import AuthorizationPage from '../support/pages/AuthorizationPage'
import user from '../fixtures/user.json'

describe('User can', () => {
  it('authorize', {retries: 3}, () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm(user.email, user.password);
  })

  it('verify login helper', {retries: 3}, () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm(user.email, user.password);
  })
})