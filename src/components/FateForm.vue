<template>
  <div>
    <el-form ref="form">
      <el-form-item label="Question">
        <el-input v-model="question"></el-input>
      </el-form-item>
      <el-form-item label="Result">
        <el-input v-model="result" type="textarea" readonly :rows="10"></el-input>
      </el-form-item>
      <el-form-item label="Date">
        <el-input v-model="datetime" readonly></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createTask">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/mutation-types';
import Fate from '@/models/fate';

export default defineComponent({
  name: 'FateForm',
  setup() {
    const state = reactive(new Fate());
    const store = useStore();

    const createTask = () => {
      if (
        state.question === ''
        || state.result === ''
        || state.datetime === ''
      ) return;

      const fate = new Fate({
        question: state.question,
        result: state.result,
        datetime: state.datetime,
      });

      store.commit(MutationTypes.SAVE_FATE, fate);
      state.reset();
    };

    return { createTask, ...toRefs(state) };
  },
});
</script>

<style>

</style>
