<template>
<div class="common-layout">
  <fate-form />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FateForm from '@/components/FateForm.vue';

export default defineComponent({
  name: 'Home',
  components: { FateForm },
});
</script>
