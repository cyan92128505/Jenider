<template>
  <div>FateInput
        <h1>{{ msg }}</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FateInput',
  props: {
    msg: String,
  },
});
</script>

<style>

</style>
