<template>
  <q-page class="column items-center justify-evenly q-px-xl">
    <p class="q-mt-xl">
      This is a test Quasar Application intended for debugging the @quasar/testing app extension.
    </p>
    <p>
      An issue was find in version <mark>2.0.3</mark> of @quasar/testing would fail to mount components containing a <mark>q-page</mark> element.
    </p>
    <p>
      The aim of this repository is to provided reproducibility to the issue above to the development team.
    </p>

    <h5>Provided materiais</h5>

    <p>
      I have provided four test components, all in the <mark>src/pages</mark> directory:
    </p>

    <ul>
      <li>
        <mark>TestPage.vue</mark>: a simple <mark>q-page</mark> view containing only plain text.
      </li>
      <li>
        <mark>TestPageWithComponent.vue</mark>: a <mark>q-page</mark> view containing plain text and a nested component (<mark>src/components/TestComponent.vue</mark>).
      </li>
      <li>
        <mark>TestPageNoError.vue</mark>: a view identical to <mark>TestPage.vue</mark> but wrapped in a <mark>div</mark> instead of a <mark>q-page</mark>.
        <mark>TestPageWithComponentNoError.vue</mark>: a view identical to <mark>TestPage.vue</mark> but wrapped in a <mark>div</mark> instead of a <mark>q-page</mark>.
      </li>
    </ul>

    <p>
      Each of these components have a sibling <mark>.spec.ts</mark> test file. These tests use Cypress' Component Test Runner to mount the component and check if an element exists.
    </p>

    <p>
      Use <mark>yarn run test:unit</mark> or <mark>yarn run test:unit:ci</mark> on the terminal to run the tests.
    </p>

    <p>
      The components with <mark>q-page</mark> elements will fail to mount with the following error:
    </p>

    <pre>
      TypeError
      Cannot read properties of undefined (reading 'header')
    </pre>

    <h5>Application information</h5>

    <p>
      This application was created by running <mark>quasar create</mark> with Quasar CLI version 1.2.2.
    </p>

    <p>
      This applications uses Webpack. TypeScript, Quasar v2 and Vue 3's composition API are installed. No CSS preprocessors were selected during installation. No additional features were added other than ESLint with the Standard preset.
    </p>

    <p>
      <mark>@quasar/testing</mark> was added by running <mark>quasar ext add @quasar/testing</mark> with Quasar CLI. Only the Cypress E2E Testing harness was selected during installation, with TypeScript support.
    </p>

    <p>
      All files other than <mark>src/pages/Index.vue</mark> and the test components and spec files are provided as-is from the CLI installation.
    </p>

    <p>
      Additionally, because no CSS preprocessors were installed, line 19 in<mark>test/cypress/support/unit.ts</mark> was changed from:
    </p>

    <pre>
      import 'src/css/app.scss'
    </pre>

    <p>
      To:
    </p>

    <pre>
      import 'src/css/app.css'
    </pre>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})
</script>

<style>
mark {
  background-color: #d9d7d7;
  font-family: 'Courier New', Courier, monospace;
  padding: 2px;
}
pre {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
</style>
