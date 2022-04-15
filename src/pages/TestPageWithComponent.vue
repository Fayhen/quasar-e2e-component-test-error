<template>
  <q-page
    class="column items-center justify-evenly"
    data-cy="test-page-with-component"
  >
    <h3 class="q-mb-md" data-cy="test-page-with-component-text">
      This is the TestPageWithComponent.vue component.
    </h3>

    <TestComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestComponent from 'src/components/TestComponent.vue'

export default defineComponent({
  name: 'TestPageWithComponent',

  components: {
    TestComponent
  }
})
</script>
