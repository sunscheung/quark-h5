<!--button.vue-->
<template>
    <dv-border-box-4
        :reverse="reverseD"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-border-box-4>
</template>

<script>
export default {
  name: "C317Border4D", // 这个名字很重要，它就是未来的标签名
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
      default:()=>(['rgb(255,0,0)', 'rgb(0,108,245)'])
    }
  }
}
</script>
