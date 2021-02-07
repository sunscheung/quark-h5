<template>
    <dv-conical-column-chart
        :config="config"
        :style="{width:resize.width+'px',height:resize.height+'px'}"
    />
</template>

<script>
export default {
  name: "C317ConicalD", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 250,
        width: 400
      })
    }
  },
  data() {
    return {
      config: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 71
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 35
          },
          {
            name: '漯河',
            value: 15
          }
        ]
      }
    }
  }
};
</script>
