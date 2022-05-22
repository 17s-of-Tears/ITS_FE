import axios from 'axios'

const BASE_URI = 'http://localhost:8000'

const instance = url =>
	axios.create({
		baseURL: `${BASE_URI}/${url}`,
		withCredentials: true
	})

export const user = instance('user')
