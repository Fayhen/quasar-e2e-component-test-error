/* global cy, describe, it */

import { mount } from '@cypress/vue'
import TestComponent from 'src/components/TestComponent.vue'

describe('TestComponent.vue', () => {
  it('renders', () => {
    mount(TestComponent)

    cy.dataCy('test-component')
      .should('exist')
      .and('be.visible')

    cy.dataCy('test-component-text')
      .should('exist')
      .and('contain', 'This a test component.')
  })
})
