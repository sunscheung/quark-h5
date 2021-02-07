import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpServer from '@client/service/httpServer' // axios拦截器配置
import '@/permission' // 权限控制
import * as mUtils from '@/common/js/mUtils'
import config from '@/config'
import filters from './filters/index'
import AES from '@/common/js/secret'
import * as API from '@/api/index'

import Element from 'element-ui'
import '@/common/styles/element-variables.scss'
import '@/common/styles/index.scss' // 自定义 css
import 'animate.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(Element);
Vue.use(VueClipboard)

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import VCharts from 'v-charts'
Vue.use(dataV)
Vue.use(VCharts)

/**
 * 引入公共方法mUtils
 */
Vue.prototype.$mUtils = mUtils;
Vue.prototype.AES = AES
Vue.prototype.$axios = httpServer;
Vue.prototype.$api = API;
Vue.prototype.$API = API;

/**
 * 公共配置信息
 */
Vue.prototype.$config = config

// 注册全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})



// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
	let url = mUtils.Cookie.get('beforeLoginUrl')
	url = decodeURIComponent(url)
	if (!url || url.indexOf('/author') != -1) {
		router.push('/')
	} else {
		router.push(url)
		mUtils.Cookie.set('beforeLoginUrl', '', 1 / 24 / 60, window.location.host, window.location.pathname.substring(0, window.location.pathname.length - 1))
	}
};


String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

Vue.config.productionTip = false

store.commit('UPDATE_USER_FROM_LOCAL')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
