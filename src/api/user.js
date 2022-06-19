import { user, userWithToken } from '.'

//* 유저 정보 조회 API
export const loadMyInfoAPI = () => userWithToken.get('/me')

//* 회원가입 API
export const signUpAPI = data => user.post('/signup', data)

//* 로그인 API
export const loginAPI = data => user.post('/login', data)

//* 프로필사진 변경 API
export const updateImgAPI = data => userWithToken.post('/upload', data)
