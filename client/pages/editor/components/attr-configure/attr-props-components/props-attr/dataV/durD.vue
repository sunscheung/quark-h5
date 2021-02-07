<template>
  <el-form-item style="margin:0" label="单次动画时长(秒)：">
    <el-input-number
        v-model="input"
        @change="change"
        :precision="1"
        :step="0.1"
        :min="0.1"
        controls-position="right"
        size="mini"
        style="width: 90px;"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-durD",
  props: {
    durD: Number,
  },
  data() {
    return {
      input:this.durD
    }
  },
  methods:{
    change(d){
      this.input=d
    }
  },
  watch: {
    durD() {
      this.input = this.durD;
    },
    input() {
      // TODO 这里传递值
      this.$emit("update:durD", this.input);
    },
  },
}
</script>

<style lang="less" scoped>
</style>
