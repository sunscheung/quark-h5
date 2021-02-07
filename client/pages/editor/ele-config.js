//import $config from '@client/config'

export default [
	{
		title: '基础组件',
		components: [
			{
				elName: 'qk-text',
				title: '文字',
				icon: 'iconfont iconwenben',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 40,
					width: 100
				}
			},
			{
				elName: 'qk-image',
				title: '图片',
				icon: 'iconfont icontupian',
				valueType: '', // 标识数据类型，用于表单组件,
				defaultStyle: {
					height: 200,
					width: 200
				}
			},
			{
				elName: 'qk-button',
				title: '按钮',
				icon: 'iconfont iconanniuzu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					width: 140,
					height: 40,
					paddingTop: 10,
					paddingBottom: 10,
					borderColor: "#999999",
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4
				}
			},
			{
				elName: 'qk-rectangle-border',
				title: '矩形边框',
				icon: 'iconfont iconjuxing',
				valueType: '',
				defaultStyle: {
					width: 120,
					height: 100,
					borderColor: "#999999",
					borderStyle: 'solid',
					borderWidth: 2
				}
			},
			{
				elName: 'qk-rectangle-border',
				title: '分割线',
				icon: 'iconfont icon758bianjiqi_fengexian',
				valueType: '',
				defaultStyle: {
					height: 1,
					width: 300,
					backgroundColor: '#999999'
				}
			},
			{
				elName: 'qk-image-carousel',
				title: '图片轮播',
				icon: 'iconfont iconshouyelunbotu',
				valueType: '', // 标识数据类型，用于表单组件,
				defaultStyle: {
					height: 210,
					width: 200
				}
			},
			//表单组件
			{
				elName: 'qk-iframe',
				title: '内嵌iframe',
				icon: 'iconfont iconiframetianjia',
				valueType: '',
				defaultStyle: {
					width: 800,
					height: 200,
					paddingTop: 10,
					paddingBottom: 10
				}
			},
			{
				//报错，地图不显示
				elName: 'map',
				title: '地图',
				icon: 'iconfont iconditu',
				valueType: '',
				defaultStyle: {
					width: 300,
					height: 200,
					paddingTop: 10,
					paddingBottom: 10
				}
			},
			{
				//视频不播放，没有东西
				elName: 'video',
				title: '视频',
				icon: 'iconfont iconshipin',
				valueType: '',
				defaultStyle: {
					width: 300,
					height: 300,

				}
			},
			{
				elName: 'el-input',
				title: '文本框',
				icon: 'iconfont iconwenbenkuang',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'el-radio',
				title: '单选框',
				icon: 'iconfont iconplus-radio',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'el-checkbox',
				title: '复选框',
				icon: 'iconfont iconduoxuan',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'el-date-picker',
				title: '日期选择器',
				icon: 'iconfont iconriqi',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'el-time-select',
				title: '时间选择器',
				icon: 'iconfont iconshijian',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'el-date-picker',
				title: '日期时间',
				icon: 'iconfont iconriqishijian',
				defaultStyle: {
					width: 300,

				}
			},
			{
				elName: 'qk-bg-music',
				title: '音乐',
				icon: 'iconfont iconyinlemusic217',
				valueType: '',
				defaultStyle: {
					height: 52,
					width: 52,
				}
			},
		]
	},
	{
		title: '测试专用',
		components: [
			{
				elName: 'c317-line-v',
				title: '折线图',
				icon: 'iconfont iconwenben',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 450,
					width: 600
				}
			}
		]
	},
	{
		title: '加载容器',
		components: [
			{
				elName: 'dv-loading',
				title: '加载',
				icon: 'iconfont icon-jiazai',
				defaultStyle: {
					height: 90,
					width: 90
				}
			},
			{
				elName: 'dv-full-screen-container',
				title: '全屏容器',
				icon: 'iconfont icon-rongqi',
				defaultStyle: {
					height: 450,
					width: 450
				}
			}
		]
	},
	{
		title: '边框',
		components: [
			{
				elName: 'c317-border1-d',
				title: '边框1',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border2-d',
				title: '边框2',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border3-d',
				title: '边框3',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border4-d',
				title: '边框4',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border5-d',
				title: '边框5',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border6-d',
				title: '边框6',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border7-d',
				title: '边框7',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border8-d',
				title: '边框8',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border9-d',
				title: '边框9',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border10-d',
				title: '边框10',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border11-d',
				title: '边框11',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border12-d',
				title: '边框12',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
			{
				elName: 'c317-border13-d',
				title: '边框13',
				icon: 'iconfont icon--quanbubiankuang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 370,
					width: 930
				}
			},
		]
	},
	{
		title: '装饰',
		components:  [
			{
				elName: 'c317-decoration1-d',
				title: '装饰1',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration2-d',
				title: '装饰2',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration3-d',
				title: '装饰3',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration4-d',
				title: '装饰4',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration5-d',
				title: '装饰5',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration6-d',
				title: '装饰6',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration7-d',
				title: '装饰7',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration8-d',
				title: '装饰8',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration9-d',
				title: '装饰9',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 155,
					width: 155
				}
			},
			{
				elName: 'c317-decoration10-d',
				title: '装饰10',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration11-d',
				title: '装饰11',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 50,
					width: 200
				}
			},
			{
				elName: 'c317-decoration12-d',
				title: '装饰12',
				icon: 'iconfont icon-zhuangshi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 155,
					width: 155
				}
			},
		]
	},
	{
		title: 'Datav图表',
		components: [
			{
				elName: 'c317-ring-d',
				title: '动态环图',
				icon: 'iconfont icon-huanxingtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 260,
					width: 260
				}
			},
			{
				elName: 'c317-capsule-d',
				title: '胶囊柱图',
				icon: 'iconfont icon-jiaonang',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 180,
					width: 280
				}
			},
			{
				elName: 'c317-water-d',
				title: '水位图',
				icon: 'iconfont icon-shuiwei',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 120,
					width: 210
				}
			},
			{
				elName: 'c317-percent-d',
				title: '进度池',
				icon: 'iconfont icon-jindutiao',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 110,
					width: 210
				}
			},
			{
				elName: 'c317-flyline-d',
				title: '飞线图1',
				icon: 'iconfont icon-xianxingtubiao-',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 250,
					width: 400
				}
			},
			{
				elName: 'c317-flyline-enhanced-d',
				title: '飞线图2',
				icon: 'iconfont icon-xianxingtubiao-',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 250,
					width: 400
				}
			},
			{
				elName: 'c317-conical-d',
				title: '锥形柱图',
				icon: 'iconfont icon-mengfeisiyuansu-daozhuiti',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 250,
					width: 400
				}
			},
			{
				elName: 'c317-digital-d',
				title: '数字翻牌器',
				icon: 'iconfont icon-shuzi',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 60,
					width: 120
				}
			},
			{
				elName: 'c317-scroll-d',
				title: '轮播表',
				icon: 'iconfont icon-duozhangxiaotulunbo',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 250,
					width: 400
				}
			},
			{
				elName: 'c317-scroll-ranking-d',
				title: '排名轮播表',
				icon: 'iconfont icon-duozhangxiaotulunbo',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 250,
					width: 400
				}
			},
		]
	},
	{
		title: 'V-Charts图表',
		components: [
			{
				elName: 'c317-line-v',
				title: '折线图',
				icon: 'iconfont icon-zhexiantu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 350,
					width: 480
				}
			},
			{
				elName: 'c317-histogram-v',
				title: '柱状图',
				icon: 'iconfont icon-zhuzhuangtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 350,
					width: 480
				}
			},
			{
				elName: 'c317-bar-v',
				title: '条形图',
				icon: 'iconfont icon-zhengfutiaoxingtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 350,
					width: 480
				}
			},
			{
				elName: 'c317-pie-v',
				title: '饼状图',
				icon: 'iconfont icon-bingzhuangtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 340,
					width: 380
				}
			},
			{
				elName: 'c317-ring-v',
				title: '环图',
				icon: 'iconfont icon-fsux_tubiao_bingtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 340,
					width: 380
				}
			},
			{
				elName: 'c317-waterfall-v',
				title: '瀑布图',
				icon: 'iconfont icon-pubutu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 360,
					width: 380
				}
			},
			{
				elName: 'c317-funnel-v',
				title: '漏斗图',
				icon: 'iconfont icon-loudoutu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 360,
					width: 430
				}
			},
			{
				elName: 'c317-radar-v',
				title: '雷达图',
				icon: 'iconfont icon-leidatu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 360,
					width: 400
				}
			},
			{
				elName: 'c317-map-v',
				title: '地图',
				icon: 'iconfont icon-ditu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 380,
					width: 500
				}
			},
			{
				elName: 'c317-sankey-v',
				title: '桑基图',
				icon: 'iconfont icon-sangjitu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 400,
					width: 430
				}
			},
			{
				elName: 'c317-heatmap-v',
				title: '热力图',
				icon: 'iconfont icon-relitu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 400,
					width: 480
				}
			},
			{
				elName: 'c317-scatter-v',
				title: '散点图',
				icon: 'iconfont icon-sandiantu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 350,
					width: 480
				}
			},
			{
				elName: 'c317-candle-v',
				title: 'K线图',
				icon: 'iconfont icon-Kxiantu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 350,
					width: 480
				}
			},
			{
				elName: 'c317-gauge-v',
				title: '仪表盘',
				icon: 'iconfont icon-yibiaopan',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 340,
					width: 380
				}
			},
			{
				elName: 'c317-tree-v',
				title: '树图',
				icon: 'iconfont icon-shuzhuangtu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 390,
					width: 530
				}
			},
			{
				elName: 'c317-liquidfill-v',
				title: '水球图',
				icon: 'iconfont icon-fsux_tubiao_shuiqiutu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 340,
					width: 380
				}
			},
			{
				elName: 'c317-wordcloud-v',
				title: '词云图',
				icon: 'iconfont icon-ciyuntu',
				// 每个组件设置props来展示哪些显示哪些编辑项
				valueType: '', // 标识数据类型，用于表单组件
				defaultStyle: {
					height: 380,
					width: 380
				}
			},
		]
	}
]
