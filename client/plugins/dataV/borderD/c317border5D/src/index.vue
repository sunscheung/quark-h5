<!--button.vue-->
<template>
    <dv-border-box-5
        :reverse="reverseD"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-border-box-5>
</template>

<script>
export default {
  name: "C317Border5D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 370,
        width: 930
      })
    },
    reverseD:{
      type:Boolean,
      default:false
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(118,118,118)', 'rgb(118,118,118)'])
    }
  }
};
</script>
