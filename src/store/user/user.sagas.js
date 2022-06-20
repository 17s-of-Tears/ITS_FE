import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import { setCookie } from '@/utils/cookie'
import * as apis from '@/api/user'
import * as types from './user.types'
import * as actions from './user.actions'

//* sagas
function* loadMyInfo() {
	try {
		const { data } = yield call(apis.loadMyInfoAPI)
		yield put(actions.loadMyInfoSuccess(data))
	} catch (error) {
		console.log(error)
		yield put(actions.loadMyInfoFailure('에러가 발생했습니다.'))
	}
}

function* signUp(action) {
	try {
		yield call(apis.signUpAPI, action.data)
		yield put(actions.signUpSuccess())
	} catch (error) {
		const { message } = error.response.data
		yield put(actions.signUpFailure(message ? message : '에러가 발생했습니다.'))
	}
}

function* logIn(action) {
	try {
		const { data } = yield call(apis.loginAPI, action.data)
		setCookie('auth', data.token, {
			path: '/',
			secure: true,
			sameSite: 'none'
		})
		yield put(actions.logInSuccess(data.user))
	} catch (error) {
		const { message } = error.response.data
		yield put(actions.logInFailure(message ? message : '에러가 발생했습니다.'))
	}
}

function* uploadImg(action) {
	try {
		const { data } = yield call(apis.updateImgAPI, action.data)
		yield put(actions.uploadImgSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.uploadImgFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

//* watch
function* watchLoadMyInfo() {
	yield takeLatest(types.LOAD_MY_INFO_REQUEST, loadMyInfo)
}

function* watchSignUp() {
	yield takeLatest(types.SIGN_UP_REQUEST, signUp)
}

function* watchLogIn() {
	yield takeLatest(types.LOG_IN_REQUEST, logIn)
}

function* watchUploadImg() {
	yield takeLatest(types.UPLOAD_IMG_REQUEST, uploadImg)
}

export default function* userSaga() {
	yield all([
		fork(watchLoadMyInfo),
		fork(watchSignUp),
		fork(watchLogIn),
		fork(watchUploadImg)
	])
}
