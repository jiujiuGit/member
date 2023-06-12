// import uni from '@unijs/uni'

import { HTTP_STATUS } from './helper/checkStatus'
import { logError } from '../utils/error'
export default {
	baseOptions(params, method = 'GET') {
		let { url, data } = params
		let contentType = 'application/json'
		contentType = params.contentType || contentType
		type OptionType = {
			url: string,
			data?: object | string,
			method?: any,
			header: object,
			// mode: string,
			success: any,
			error: any,
			xhrFields: object,
		}
		const option: OptionType = {
			url: 'https://cdztest.poruanjian.com' + url,
			// url: url.indexOf('http') !== -1 ? url : process.env.NODE_ENV === 'development' ? 'https://cdztest.poruanjian.com' + url : 'https://cdztest.poruanjian.com' + url,
			data: data,
			method: method,
			header: {
				'content-type': contentType,
				token: uni.getStorageSync('token')
			},
			// mode: 'cors',
			xhrFields: { withCredentials: true },
			success(res) {
				// setCookie(res)
				if (res.data.code != 1) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					})
				} else {
					return res.data
				}
			},
			error(e) {
				logError('api', '请求接口出现问题', e)
			}
		}
		return uni.request(option)
	},
	get(url, data?: object) {
		let option = { url, data }
		return this.baseOptions(option)
	},
	post: function(url, data?: object, contentType?: string) {
		let params = { url, data, contentType }
		return this.baseOptions(params, 'POST')
	},
	put(url, data?: object) {
		let option = { url, data }
		return this.baseOptions(option, 'PUT')
	},
	delete(url, data?: object) {
		let option = { url, data }
		return this.baseOptions(option, 'DELETE')
	}
}