import { Given, Then } from 'cucumber';
import { expect } from 'chai';
import HomePage from '../pages/HomePage/home.po'

const home = new HomePage();

Given('I am on the root page', async () => {
  await home.openHome();
});

Then('I expect to see the title', async () => {
  const title = await home.readTitle();

  expect(title).to.eql('This is Home!');

  await home.closePage();
});