/*
 * @Author: 张旭
 * @Date: 2021-01-14 16:06:22
 * @LastEditTime: 2021-01-14 16:06:38
 */
// 为组件提供 install 方法，供组件对外按需引入
import Component from './src/index'
Component.install = Vue => {
	Vue.component(Component.name, Component)
}
export default Component