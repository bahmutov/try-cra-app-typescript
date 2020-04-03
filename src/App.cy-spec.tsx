/// <reference types="cypress" />
/// <reference types="cypress-react-unit-test" />
import React from 'react';
import App from './App';

it('renders learn react link', () => {
  cy.mount(<App />)
  cy.contains(/learn react/i)
});
