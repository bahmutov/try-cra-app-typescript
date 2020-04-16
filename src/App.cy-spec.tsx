/// <reference types="cypress" />
/// <reference types="cypress-react-unit-test" />
import React from 'react';
import App from './App';
import {mount} from 'cypress-react-unit-test'

it('renders learn react link', () => {
  mount(<App />)
  cy.contains(/learn react/i)
});
