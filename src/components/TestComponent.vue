<template>
  <div data-cy="test-component" style="border: 1px dotted black;">
    <p data-cy="test-component-text">
      This a test component.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent'
})
</script>
