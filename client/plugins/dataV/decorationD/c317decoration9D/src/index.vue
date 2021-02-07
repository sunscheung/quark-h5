<!--button.vue-->
<template>
    <dv-decoration-9
        :dur="durD"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
      {{ text }}
    </dv-decoration-9>
</template>

<script>
export default {
  name: "C317Decoration9D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 155,
        width: 155
      })
    },
    text: {
      type: String,
      default: "66%",
    },
    durD:{
      type:Number,
      default:2
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(40,105,253)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
