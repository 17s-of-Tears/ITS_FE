import axios from 'axios'
import interceptors from './config/interceptors'

const BASE_URI = import.meta.env.VITE_SERVER_URI

//* 로그인 전 요청
const instance = url =>
	axios.create({
		baseURL: `${BASE_URI}/${url}`,
		withCredentials: true
	})

//* 로그인 후 요청
const instanceWithAuth = url => {
	const instance = axios.create({ baseURL: `${BASE_URI}/${url}` })
	return interceptors(instance)
}

export const user = instance('users')
export const userWithToken = instanceWithAuth('users')
export const team = instanceWithAuth('teams')
export const comment = instanceWithAuth('comments')
