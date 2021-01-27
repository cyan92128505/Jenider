<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'FateResult',
  props: {
    result: { type: String, required: true },
  },
  setup(props) {
    return () => h('div', props.result.split('\n').map((s) => h('div', {}, s)));
  },
});
</script>
