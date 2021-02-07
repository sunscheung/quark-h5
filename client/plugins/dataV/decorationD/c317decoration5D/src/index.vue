<!--button.vue-->
<template>
    <dv-decoration-5
        :dur="durD"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-decoration-5>
</template>

<script>
export default {
  name: "C317Decoration5D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 50,
        width: 200
      })
    },
    durD:{
      type:Number,
      default:2
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
