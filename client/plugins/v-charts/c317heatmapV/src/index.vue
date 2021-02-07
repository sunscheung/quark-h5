<!--button.vue-->
<template>
    <ve-heatmap :data="chartDataV"
                :settings="chartSettings"
                :width="resize.width+'px'"
                :height="resize.height+'px'">
    </ve-heatmap>
</template>

<script>
export default {
  name: "C317HeatmapV", // 这个名字很重要，它就是未来的标签名
  props: {
    resize: {
      type: Object,
      default: () => ({
        height: 400,
        width: 480
      })
    },
    chartDataV: {
      type: Object,
      default: () => ({
        columns: ['lat', 'lng'],
        rows: [
          {'lat': 120.14322240845, 'lng': 30.236064370321},
          {'lat': 120.14301682797, 'lng': 30.236035316745},
          {'lat': 120.14138577045, 'lng': 30.236113748704},
          {'lat': 120.1400398833, 'lng': 30.235973050702},
          {'lat': 120.13893453465, 'lng': 30.23517220446},
          {'lat': 120.1382899739, 'lng': 30.234062922977},
          {'lat': 120.13265960629, 'lng': 30.231641351722},
          {'lat': 120.13170681763, 'lng': 30.229925745619},
          {'lat': 120.13119614803, 'lng': 30.228996846637},
          {'lat': 120.13023980134, 'lng': 30.228226570416}
        ]
      })
    }
  },
  data() {
    return {
      chartSettings: {
        key: 'bsCet9zkoAGGLWssBtf0VXHosVaBT9Q5',
        v: '3.0',
        bmap: {
          center: [120.14322240845, 30.236064370321],
          zoom: 14,
          roam: true,
          mapStyleV2: {
            //设置百度地图自定义样式
            styleId: '38e07b3839299a908926696ebfe153c3'
          }
        },
        type: 'bmap'
      },
      chartData1:{
        columns: ['时间', '地点', '人数'],
        rows: [
          {'时间': '星期一', '地点': '北京', '人数': 1000},
          {'时间': '星期二', '地点': '上海', '人数': 400},
          {'时间': '星期三', '地点': '杭州', '人数': 800},
          {'时间': '星期二', '地点': '深圳', '人数': 200},
          {'时间': '星期三', '地点': '长春', '人数': 100},
          {'时间': '星期五', '地点': '南京', '人数': 300},
          {'时间': '星期四', '地点': '江苏', '人数': 800},
          {'时间': '星期一', '地点': '北京', '人数': 700},
          {'时间': '星期三', '地点': '上海', '人数': 300},
          {'时间': '星期二', '地点': '杭州', '人数': 500}
        ]
      }
    }
  }
};
</script>
