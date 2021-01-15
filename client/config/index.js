/*
 * @Author: 张旭
 * @Date: 2020-12-14 17:30:59
 * @LastEditTime: 2021-01-15 16:08:36
 */
/**
 * 公共配置文件
 */
import $config from '../../config'


const configDict = {
	development: {
		baseURL: 'http://localhost:4000'
	},
	production: {
		baseURL: $config.baseURL
	}
}

const currentConfigKey = process.env.NODE_ENV
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'development'

const configObj = {
	isDevelop: (isDev || isTest),
	...configDict[currentConfigKey],
	// h5模式宽高
	canvasH5Width: 375,
	canvasH5Height: 644,
	pageModeList: [{
		value: 'h5',
		label: 'H5',
		disabled: false
	}, {
		value: 'longPage',
		label: '长页H5',
		disabled: false
	}, {
		name: 'relativePage',
		label: '排版图文',
		disabled: true
	}, {
		value: 'pc',
		label: 'PC页面',
		disabled: true
	}]
}

export default configObj
