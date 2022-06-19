import * as types from './user.types'

//* 회원가입
export const loadMyInfoRequest = data => ({
	type: types.LOAD_MY_INFO_REQUEST,
	data
})
export const loadMyInfoSuccess = data => ({
	type: types.LOAD_MY_INFO_SUCCESS,
	data
})
export const loadMyInfoFailure = error => ({
	type: types.LOAD_MY_INFO_FAILURE,
	error
})

//* 회원가입
export const signUpRequest = data => ({
	type: types.SIGN_UP_REQUEST,
	data
})
export const signUpSuccess = () => ({
	type: types.SIGN_UP_SUCCESS
})
export const signUpFailure = error => ({
	type: types.SIGN_UP_FAILURE,
	error
})

//* 로그인
export const logInRequest = data => ({
	type: types.LOG_IN_REQUEST,
	data
})
export const logInSuccess = data => ({
	type: types.LOG_IN_SUCCESS,
	data
})
export const logInFailure = error => ({
	type: types.LOG_IN_FAILURE,
	error
})

//* 프로필사진 업로드
export const uploadImgRequest = data => ({
	type: types.UPLOAD_IMG_REQUEST,
	data
})
export const uploadImgSuccess = data => ({
	type: types.UPLOAD_IMG_SUCCESS,
	data
})
export const uploadImgFailure = error => ({
	type: types.UPLOAD_IMG_FAILURE,
	error
})

//* 동기 액션
export const logoutRequest = () => ({
	type: types.LOG_OUT_REQUEST
})

export const clearStateSuccessAction = () => ({
	type: types.CLEAR_STATE_SUCCESS
})

export const clearStateFailureAction = () => ({
	type: types.CLEAR_STATE_FAILURE
})
