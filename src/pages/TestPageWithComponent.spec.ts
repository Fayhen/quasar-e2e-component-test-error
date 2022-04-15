/* global cy, describe, it */

import { mount } from '@cypress/vue'
import QPageContainer from 'app/test/cypress/wrappers/QPageContainer.vue'
import TestPageWithComponent from 'src/pages/TestPageWithComponent.vue'

describe('TestPageWithComponent.vue', () => {
  it('renders', () => {
    mount(QPageContainer, {
      props: {
        component: TestPageWithComponent
      }
    })

    cy.dataCy('test-page-with-component')
      .should('exist')
      .and('be.visible')

    cy.dataCy('test-page-with-component-text')
      .should('exist')
      .and('contain', 'This is the TestPageWithComponent.vue component.')
  })
})
