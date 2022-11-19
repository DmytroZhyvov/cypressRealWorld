import { loginViaAPI } from '../support/helper';
import HomePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import tagsArray from '../fixtures/tagsMock.json';
import { faker } from '@faker-js/faker'

tagsArray.tags = [`${faker.animal.bear.name}`, `${faker.animal.cow.name}`]

beforeEach('Login', () => {
  cy.intercept('GET', '**/tags', tagsArray)
  loginViaAPI(user);
})

describe('User can', () => {
  it('verify login helper', {retries: 3}, () => {
    HomePage.visit();
    HomePage.getProfileButton().should('be.visible');
    HomePage.getTagList().should('contain', tagsArray.tags[0]);
    HomePage.getTagList().should('contain', tagsArray.tags[1]);
  })
})