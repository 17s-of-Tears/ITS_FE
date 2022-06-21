import { user, userWithToken } from '.'

//* 유저 정보 조회 API
export const loadMyInfoAPI = () => userWithToken.get('/me')

//* 회원가입 API
export const signUpAPI = data => user.post('/signup', data)

//* 로그인 API
export const loginAPI = data => user.post('/login', data)

//* 총 팀의 갯수 조회 API
export const getUserTotalAPI = () => user.get('/hap')

//* 닉네임 변경 API
export const changeNicknameAPI = data => userWithToken.post('/nickname', data)

//* 프로필사진 변경 API
export const updateImgAPI = data => userWithToken.post('/image', data)

//* 프로필사진 삭제 API
export const deleteImgAPI = () => userWithToken.delete('/image')

//* 유저 탈퇴 API
export const deleteUserAPI = id => userWithToken.delete(`/${id}`)
