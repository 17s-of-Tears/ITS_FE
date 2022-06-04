import { getCookie } from '@/utils/cookie'

export default instance => {
	instance.interceptors.request.use(
		config => {
			config.headers.Authorization = `Bearer ${getCookie('auth')}`
			return config
		},
		error => Promise.reject(error)
	)

	instance.interceptors.response.use(
		response => response,
		error => Promise.reject(error)
	)

	return instance
}
