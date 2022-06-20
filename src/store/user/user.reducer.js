import produce from 'immer'
import * as actions from './user.types'

const initialState = {
	loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	getUserTotalLoading: false,
	getUserTotalDone: false,
	getUserTotalError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	changeNicknameLoading: false,
	changeNicknameDone: false,
	changeNicknameError: null,
	uploadImgLoading: false,
	uploadImgDone: false,
	uploadImgError: null,
	deleteImgLoading: false,
	deleteImgDone: false,
	deleteImgError: null,
	deleteUserLoading: false,
	deleteUserDone: false,
	deleteUserError: null,
	me: null
}

const userReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* LOAD_MY_INFO
			case actions.LOAD_MY_INFO_REQUEST:
				draft.loadMyInfoLoading = true
				draft.loadMyInfoDone = false
				draft.loadMyInfoError = null
				break
			case actions.LOAD_MY_INFO_SUCCESS:
				draft.loadMyInfoLoading = false
				draft.loadMyInfoDone = true
				draft.me = action.data
				break
			case actions.LOAD_MY_INFO_FAILURE:
				draft.loadMyInfoLoading = false
				draft.loadMyInfoError = action.error
				break
			//* SIGN_UP
			case actions.SIGN_UP_REQUEST:
				draft.signUpLoading = true
				draft.signUpDone = false
				draft.signUpError = null
				break
			case actions.SIGN_UP_SUCCESS:
				draft.signUpLoading = false
				draft.signUpDone = true
				break
			case actions.SIGN_UP_FAILURE:
				draft.signUpLoading = false
				draft.signUpError = action.error
				break
			//* LOG_IN
			case actions.LOG_IN_REQUEST:
				draft.logInLoading = true
				draft.logInDone = false
				draft.logInError = null
				break
			case actions.LOG_IN_SUCCESS:
				draft.logInLoading = false
				draft.logInDone = true
				draft.me = action.data
				break
			case actions.LOG_IN_FAILURE:
				draft.logInLoading = false
				draft.logInError = action.error
				break
			//* CHANGE_NICKNAME
			case actions.CHANGE_NICKNAME_REQUEST:
				draft.changeNicknameLoading = true
				draft.changeNicknameDone = false
				draft.changeNicknameError = null
				break
			case actions.CHANGE_NICKNAME_SUCCESS:
				draft.changeNicknameLoading = false
				draft.changeNicknameDone = true
				draft.me.nickname = action.data.nickname
				break
			case actions.CHANGE_NICKNAME_FAILURE:
				draft.changeNicknameLoading = false
				draft.changeNicknameError = action.error
				break
			//* UPLOAD_IMG
			case actions.UPLOAD_IMG_REQUEST:
				draft.uploadImgLoading = true
				draft.uploadImgDone = false
				draft.uploadImgError = null
				break
			case actions.UPLOAD_IMG_SUCCESS:
				draft.uploadImgLoading = false
				draft.uploadImgDone = true
				draft.me.isImg = action.data.isImg
				draft.me.imgUrl = action.data.imgUrl
				break
			case actions.UPLOAD_IMG_FAILURE:
				draft.uploadImgLoading = false
				draft.uploadImgError = action.error
				break
			//* DELETE_IMG
			case actions.DELETE_IMG_REQUEST:
				draft.deleteImgLoading = true
				draft.deleteImgDone = false
				draft.deleteImgError = null
				break
			case actions.DELETE_IMG_SUCCESS:
				draft.deleteImgLoading = false
				draft.deleteImgDone = true
				draft.me.isImg = action.data.isImg
				draft.me.imgUrl = action.data.imgUrl
				break
			case actions.DELETE_IMG_FAILURE:
				draft.deleteImgLoading = false
				draft.deleteImgError = action.error
				break
			//* DELETE_USER
			case actions.DELETE_USER_REQUEST:
				draft.deleteUserLoading = true
				draft.deleteUserDone = false
				draft.deleteUserError = null
				break
			case actions.DELETE_USER_SUCCESS:
				draft.deleteUserLoading = false
				draft.deleteUserDone = true
				draft.me = null
				break
			case actions.DELETE_USER_FAILURE:
				draft.deleteUserLoading = false
				draft.deleteUserError = action.error
				break
			//* 동기 액션
			case actions.LOG_OUT_REQUEST:
				draft.me = null
				break
			case actions.CLEAR_STATE_SUCCESS:
				draft.logInDone = false
				draft.signUpDone = false
				draft.deleteUserDone = false
				break
			case actions.CLEAR_STATE_FAILURE:
				draft.logInError = false
				draft.signUpError = false
				break
			default:
				break
		}
	})

export default userReducers
