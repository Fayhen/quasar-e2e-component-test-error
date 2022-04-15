<template>
  <div
    class="column items-center justify-evenly text-center"
    data-cy="test-page-with-component-no-error"
  >
    <h3 data-cy="test-page-with-component-no-error-text">
      This is the TestPageWithComponentNoError.vue component.
    </h3>

    <TestComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestComponent from 'src/components/TestComponent.vue'

export default defineComponent({
  name: 'TestPageWithComponentNoError',

  components: {
    TestComponent
  }
})
</script>
