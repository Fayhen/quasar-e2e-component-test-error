<template>
  <q-page class="column items-center justify-evenly" data-cy="test-page">
    <h3 data-cy="test-page-text">
      This is the TestPage.vue component.
    </h3>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestPage'
})
</script>
