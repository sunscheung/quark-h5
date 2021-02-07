<!--button.vue-->
<template>
    <dv-border-box-8
        :reverse="reverseD"
        :dur="durD"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-border-box-8>
</template>

<script>
export default {
  name: "C317Border8D", // 这个名字很重要，它就是未来的标签名
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
    durD:{
      type:Number,
      default:1.2
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  }
}
</script>
