<template>
  <el-form-item style="margin:0" label="是否翻转">
    <el-switch
        v-model="tempR"
        active-color="#13ce66"
        @change="change"
        >
    </el-switch>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-reverseD",
  props: {
    reverseD: Boolean,
  },
  data() {
    return {
      tempR:this.reverseD
    }
  },
  methods:{
    change(d){
      this.tempR=d
    }
  },
  watch: {
    reverseD() {
      this.tempR = this.reverseD;
    },
    tempR() {
      // TODO 这里传递值
      this.$emit("update:reverseD", this.tempR);
    },
  },
}
</script>

<style lang="less" scoped>
</style>
