<template>
  <div></div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  name: "attr-qk-resize",
  props: {
    resize: Object,
  },
  computed:{
    ...mapGetters([
      'activeElement'
    ])
  },
  watch:{
    'activeElement.commonStyle':function (val){
      let resize = {
        width: val.width,
        height: val.height,
      }
      // TODO 这里传递值
      this.$emit("update:resize", resize);
    }
  }
}
</script>
