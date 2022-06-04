import { user } from '.'

//* 회원가입 API
export const signUpAPI = data => user.post('/signup', data)

//* 로그인 API
export const loginAPI = data => user.post('/login', data)
