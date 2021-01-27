<template>
  <div>
    <el-form ref="form">
      <el-form-item label="Question">
        <el-input v-model="question"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createTask">Create</el-button>
      </el-form-item>
      <el-form-item style="margin:0;display:none;">
        <el-input @keyup="createTask"></el-input>
      </el-form-item>
      <el-form-item>
        <fate-result v-if="result!=''" :result="result"></fate-result>
      </el-form-item>
      <el-form-item v-for="poemImage in poemImages" :key="poemImage">
        <el-image  :src="poemImage" :fit="'fill'"></el-image>
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
    const poem = reactive({
      poemImages: [] as string[],
    });
    const store = useStore();

    const createTask = () => {
      if (
        state.question === ''
      ) return;

      const darw = DarwLots.Exec(state.question);

      state.result = darw.result;
      poem.poemImages = darw.poemImages;
      const fate = new Fate({
        question: state.question,
        result: state.result,
        datetime: state.datetime,
      });

      store.commit(MutationTypes.SAVE_FATE, fate);
    };

    return { createTask, ...toRefs(state), ...toRefs(poem) };
  },
});
</script>

<style>

</style>
