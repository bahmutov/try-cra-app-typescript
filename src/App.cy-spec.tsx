/// <reference types="cypress" />
import React from 'react';
import App from './App';
import {mount} from 'cypress-react-unit-test'

it('renders learn react link', () => {
  mount(<App />)
  cy.contains(/learn react/i)
});
