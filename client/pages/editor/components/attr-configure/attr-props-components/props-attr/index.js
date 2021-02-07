import Text from './basis/text'
import imageSrc from './basis/imageSrc'
import imageSrcList from './basis/imageSrcList'
import Url from './basis/url'
import musicSrc from './basis/musicSrc'
import Resize from './resize'
//添加v-charts 配置组件
import TitleV from './v-charts/titleV'
import ChartDataV from './v-charts/chartDataV.vue'

//dataV配置组件
import ColorD from "./dataV/colorD"
import DurD from "./dataV/durD"
import ReverseD from "./dataV/reverseD"
import ScanHaloDurD from './dataV/scan-halo-durD'
import titleD from "./dataV/titleD"

export default {
	[Text.name]: Text,
	[imageSrc.name]: imageSrc,
	[Url.name]: Url,
	[musicSrc.name]: musicSrc,
	[imageSrcList.name]: imageSrcList,
	[Resize.name]: Resize,
	//v-chart配置组件
	[TitleV.name]: TitleV,
	[ChartDataV.name]: ChartDataV,
	//dataV配置组件
	[ColorD.name]: ColorD,
	[DurD.name]: DurD,
	[ReverseD.name]: ReverseD,
	[ScanHaloDurD.name]: ScanHaloDurD,
	[titleD.name]: titleD,
}
