import produce from 'immer'
import * as actions from './user.types'

const initialState = {
	loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
	uploadImgLoading: false,
	uploadImgDone: false,
	uploadImgError: null,
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
			//* UPLOAD_IMG
			case actions.UPLOAD_IMG_REQUEST:
				draft.uploadImgLoading = true
				draft.uploadImgDone = false
				draft.uploadImgError = null
				break
			case actions.UPLOAD_IMG_SUCCESS:
				draft.uploadImgLoading = false
				draft.uploadImgDone = true
				draft.me.isImg = true
				draft.me.imgUrl = action.data.imgUrl
				break
			case actions.UPLOAD_IMG_FAILURE:
				draft.uploadImgLoading = false
				draft.uploadImgError = action.error
				break
			//* 동기 액션
			case actions.LOG_OUT_REQUEST:
				draft.me = null
				break
			case actions.CLEAR_STATE_SUCCESS:
				draft.logInDone = false
				draft.signUpDone = false
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
