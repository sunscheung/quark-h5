/**
 * 基础组件库入口
 * */

import Text from './basis/text'
import Image from './basis/image'
import ImageCarousel from './basis/image-carousel'
import RectangleBorder from './basis/rectangle-border'
import Iframe from './basis/iframe'
import Button from './basis/button'
import bgMusic from './basis/bg-music'

/**
 * C317 v-chart组件库入口
 * */
import C317BarV from './v-charts/c317barV'
import C317CandleV from './v-charts/c317candleV'
import C317FunnelV from './v-charts/c317funnelV'
import C317GaugeV from './v-charts/c317gaugeV'
import C317HeatmapV from './v-charts/c317heatmapV'
import C317HistogramV from './v-charts/c317histogramV'
import C317LineV from './v-charts/c317lineV'
import C317LiquidfillV from './v-charts/c317liquidfillV'
import C317MapV from './v-charts/c317mapV'
import C317PieV from './v-charts/c317pieV'
import C317RadarV from './v-charts/c317radarV'
import C317RingV from './v-charts/c317ringV'
import C317SankeyV from './v-charts/c317sankeyV'
import C317ScatterV from './v-charts/c317scatterV'
import C317TreeV from './v-charts/c317treeV'
import C317WaterfallV from './v-charts/c317waterfallV'
import C317WordcloudV from './v-charts/c317wordcloudV'

/**
 * C317 dataV组件库入口
 * */
import C317Border1D from './dataV/borderD/c317border1D'
import C317Border2D from './dataV/borderD/c317border2D'
import C317Border3D from './dataV/borderD/c317border3D'
import C317Border4D from './dataV/borderD/c317border4D'
import C317Border5D from './dataV/borderD/c317border5D'
import C317Border6D from './dataV/borderD/c317border6D'
import C317Border7D from './dataV/borderD/c317border7D'
import C317Border8D from './dataV/borderD/c317border8D'
import C317Border9D from './dataV/borderD/c317border9D'
import C317Border10D from './dataV/borderD/c317border10D'
import C317Border11D from './dataV/borderD/c317border11D'
import C317Border12D from './dataV/borderD/c317border12D'
import C317Border13D from './dataV/borderD/c317border13D'
import C317CapsuleD from './dataV/c317capsuleD'
import C317ConicalD from './dataV/c317conicalD'
import C317Decoration1D from './dataV/decorationD/c317decoration1D'
import C317Decoration2D from './dataV/decorationD/c317decoration2D'
import C317Decoration3D from './dataV/decorationD/c317decoration3D'
import C317Decoration4D from './dataV/decorationD/c317decoration4D'
import C317Decoration5D from './dataV/decorationD/c317decoration5D'
import C317Decoration6D from './dataV/decorationD/c317decoration6D'
import C317Decoration7D from './dataV/decorationD/c317decoration7D'
import C317Decoration8D from './dataV/decorationD/c317decoration8D'
import C317Decoration9D from './dataV/decorationD/c317decoration9D'
import C317Decoration10D from './dataV/decorationD/c317decoration10D'
import C317Decoration11D from './dataV/decorationD/c317decoration11D'
import C317Decoration12D from './dataV/decorationD/c317decoration12D'
import C317DigitalD from './dataV/c317digitalD'
import C317FlylineD from './dataV/c317flylineD'
import C317FlylineEnhancedD from './dataV/c317flylineEnhancedD'
import C317PercentV from './dataV/c317percentD'
import C317RingD from './dataV/c317ringD'
import C317ScrollD from './dataV/c317scrollD'
import C317ScrollRankingD from './dataV/c317scrollRankingD'
import C317WaterD from './dataV/c317waterD'


// 所有组件列表
const components = [
	Text,
	Image,
	ImageCarousel,
	RectangleBorder,
	Iframe,
	Button,
	bgMusic,
	//C317 v-chart组件
	C317BarV,
	C317CandleV,
	C317FunnelV,
	C317GaugeV,
	C317HeatmapV,
	C317HistogramV,
	C317LineV,
	C317LiquidfillV,
	C317MapV,
	C317PieV,
	C317RadarV,
	C317RingV,
	C317SankeyV,
	C317ScatterV,
	C317TreeV,
	C317WaterfallV,
	C317WordcloudV,
	//C317 dataV组件
	C317Border1D,
	C317Border2D,
	C317Border3D,
	C317Border4D,
	C317Border5D,
	C317Border6D,
	C317Border7D,
	C317Border8D,
	C317Border9D,
	C317Border10D,
	C317Border11D,
	C317Border12D,
	C317Border13D,
	C317CapsuleD,
	C317ConicalD,
	C317Decoration1D,
	C317Decoration2D,
	C317Decoration3D,
	C317Decoration4D,
	C317Decoration5D,
	C317Decoration6D,
	C317Decoration7D,
	C317Decoration8D,
	C317Decoration9D,
	C317Decoration10D,
	C317Decoration11D,
	C317Decoration12D,
	C317DigitalD,
	C317FlylineD,
	C317FlylineEnhancedD,
	C317PercentV,
	C317RingD,
	C317ScrollD,
	C317ScrollRankingD,
	C317WaterD,
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
	// 判断是否安装，安装过就不继续往下执行
	if (install.installed) return
	install.installed = true
	// 遍历注册所有组件
	components.map(component => Vue.component(component.name, component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

let _qk_register_components_object = {};
components.forEach(item => {
	_qk_register_components_object[item.name] = item
})


export {
	Text,
	Image,
	ImageCarousel,
	RectangleBorder,
	Iframe,
	Button,
	bgMusic,
	//C317 v-chart组件
	C317BarV,
	C317CandleV,
	C317FunnelV,
	C317GaugeV,
	C317HeatmapV,
	C317HistogramV,
	C317LineV,
	C317LiquidfillV,
	C317MapV,
	C317PieV,
	C317RadarV,
	C317RingV,
	C317SankeyV,
	C317ScatterV,
	C317TreeV,
	C317WaterfallV,
	C317WordcloudV,
	//C317 dataV组件
	C317Border1D,
	C317Border2D,
	C317Border3D,
	C317Border4D,
	C317Border5D,
	C317Border6D,
	C317Border7D,
	C317Border8D,
	C317Border9D,
	C317Border10D,
	C317Border11D,
	C317Border12D,
	C317Border13D,
	C317CapsuleD,
	C317ConicalD,
	C317Decoration1D,
	C317Decoration2D,
	C317Decoration3D,
	C317Decoration4D,
	C317Decoration5D,
	C317Decoration6D,
	C317Decoration7D,
	C317Decoration8D,
	C317Decoration9D,
	C317Decoration10D,
	C317Decoration11D,
	C317Decoration12D,
	C317DigitalD,
	C317FlylineD,
	C317FlylineEnhancedD,
	C317PercentV,
	C317RingD,
	C317ScrollD,
	C317ScrollRankingD,
	C317WaterD,
	_qk_register_components_object
}



export default {
	install,
	// 所有组件，必须具有 install，才能使用 Vue.use()
}
