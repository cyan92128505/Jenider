<template>
<div class="common-layout">
  <fate-input></fate-input>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FateInput from '@/components/FateInput.vue';

export default defineComponent({
  name: 'Home',
  components: {
    FateInput,
  },
});
</script>
