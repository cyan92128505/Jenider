<template>
  <div>
    <el-form ref="form">
      <el-form-item label="Question">
        <el-input v-model="question"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createTask">Create</el-button>
      </el-form-item>
      <el-form-item>
        <fate-result v-if="result!=''" :result="result"></fate-result>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, h } from 'vue';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/mutation-types';
import DarwLots from '@/utils/draw_lots';
import Fate from '@/models/fate';
import FateResult from './FateResult.vue';

export default defineComponent({
  components: { FateResult },
  name: 'FateForm',
  setup() {
    const state = reactive(new Fate());
    const store = useStore();

    const createTask = () => {
      if (
        state.question === ''
      ) return;

      state.result = DarwLots.Exec(state.question);
      const fate = new Fate({
        question: state.question,
        result: state.result,
        datetime: state.datetime,
      });

      store.commit(MutationTypes.SAVE_FATE, fate);
    };

    return { createTask, ...toRefs(state) };
  },
});
</script>

<style>

</style>
