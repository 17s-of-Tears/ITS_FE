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

//* 총 팀 갯수 조회
export const getUserTotalRequest = () => ({
	type: types.GET_USER_TOTAL_REQUEST
})
export const getUserTotalSuccess = data => ({
	type: types.GET_USER_TOTAL_SUCCESS,
	data
})
export const getUserTotalFailure = error => ({
	type: types.GET_USER_TOTAL_FAILURE,
	error
})

//* 닉네임 변경
export const changeNicknameRequest = data => ({
	type: types.CHANGE_NICKNAME_REQUEST,
	data
})
export const changeNicknameSuccess = data => ({
	type: types.CHANGE_NICKNAME_SUCCESS,
	data
})
export const changeNicknameFailure = error => ({
	type: types.CHANGE_NICKNAME_FAILURE,
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

//* 프로필사진 삭제
export const deleteImgRequest = () => ({
	type: types.DELETE_IMG_REQUEST
})
export const deleteImgSuccess = data => ({
	type: types.DELETE_IMG_SUCCESS,
	data
})
export const deleteImgFailure = error => ({
	type: types.DELETE_IMG_FAILURE,
	error
})

//* 유저탈퇴
export const deleteUserRequest = data => ({
	type: types.DELETE_USER_REQUEST,
	data
})
export const deleteUserSuccess = data => ({
	type: types.DELETE_USER_SUCCESS,
	data
})
export const deleteUserFailure = error => ({
	type: types.DELETE_USER_FAILURE,
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
