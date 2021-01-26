<template>
  <div>FateInput
    <h1>{{ propcessMsg }}</h1>
    <el-form ref="form">
      <el-form-item label="Question">
        <el-input v-model="form.question"></el-input>
      </el-form-item>
      <el-form-item label="Result">
        <el-input v-model="form.result"></el-input>
      </el-form-item>
      <el-form-item label="Date">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FateInput',
  data() {
    return {
      form: {
        question: '',
        result: '',
        date: '',
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
  setup(props) {
    const propcessMsg = `${props.msg} - Fate`;
    return { propcessMsg };
  },
});
</script>

<style>

</style>
