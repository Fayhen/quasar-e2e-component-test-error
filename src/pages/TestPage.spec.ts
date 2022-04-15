/* global cy, describe, it */

import { mount } from '@cypress/vue'
import PageContainer from 'app/test/cypress/wrappers/PageContainer.vue'
import TestPage from 'src/pages/TestPage.vue'

describe('TestPage.vue', () => {
  it('renders', () => {
    mount(PageContainer, {
      props: {
        component: TestPage
      }
    })

    cy.dataCy('test-page')
      .should('exist')
      .and('be.visible')

    cy.dataCy('test-page-text')
      .should('exist')
      .and('contain', 'This is the TestPage.vue component.')
  })
})
