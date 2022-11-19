import HomePage from './pages/HomePage';
import AuthorizationPage from './pages/AuthorizationPage';
import user from '../fixtures/user.json';
import sessionData from '../fixtures/sessionData.json';

export function login() {
  HomePage.visit();
  HomePage.clickLoginButton();

  AuthorizationPage.submitLoginForm(user.email, user.password);
}

export function loginViaAPI(user){
  let requestBody =  {user: {email: '', password: ''}};

  requestBody.user.email = user.email;
  requestBody.user.password = user.password;

  cy.request('POST', '/api/users/login', requestBody).then(response => {
    let token = response.body.user.token;

    cy.setCookie('auth', token);

    sessionData.email = user.email;
    sessionData.username = user.userName;
    sessionData.token = response.body.user.token;

    window.localStorage.setItem('user', JSON.stringify(sessionData));
  })

}