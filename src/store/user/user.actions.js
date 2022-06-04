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
export const signUpSuccess = data => ({
	type: types.SIGN_UP_SUCCESS,
	data
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

//* 동기 액션
export const logoutRequest = () => ({
	type: types.LOG_OUT_REQUEST
})

export const clearStateSuccessAction = () => ({
	type: types.CLEAR_STATE_SUCCESS
})
