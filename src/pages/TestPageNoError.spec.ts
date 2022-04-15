/* global cy, describe, it */

import { mount } from '@cypress/vue'
import TestPageNoError from 'src/pages/TestPageNoError.vue'

describe('TestPageNoError.vue', () => {
  it('renders', () => {
    mount(TestPageNoError)

    cy.dataCy('test-page-no-error')
      .should('exist')
      .and('be.visible')

    cy.dataCy('test-page-no-error-text')
      .should('exist')
      .and('contain', 'This is the TestPageNoError.vue component.')
  })
})
