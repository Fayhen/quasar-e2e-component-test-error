/* global cy, describe, it */

import { mount } from '@cypress/vue'
import TestPageWithComponentNoError from 'src/pages/TestPageWithComponentNoError.vue'

describe('TestPageWithComponentNoError.vue', () => {
  it('renders', () => {
    mount(TestPageWithComponentNoError)

    cy.dataCy('test-page-with-component-no-error')
      .should('exist')
      .and('be.visible')

    cy.dataCy('test-page-with-component-no-error-text')
      .should('exist')
      .and('contain', 'This is the TestPageWithComponentNoError.vue component.')
  })
})
