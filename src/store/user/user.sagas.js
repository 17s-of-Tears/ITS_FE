import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { removeCookie, setCookie } from '@/utils/cookie'
import * as apis from '@/api/user'
import * as types from './user.types'
import * as actions from './user.actions'

//* sagas
function* loadMyInfo() {
	try {
		const { data } = yield call(apis.loadMyInfoAPI)
		yield put(actions.loadMyInfoSuccess(data))
	} catch (error) {
		yield put(actions.loadMyInfoFailure('에러가 발생했습니다.'))
	}
}

function* signUp(action) {
	try {
		yield call(apis.signUpAPI, action.data)
		toast.success('회원가입을 완료했습니다!')
		yield put(actions.signUpSuccess())
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(actions.signUpFailure(message ? message : '에러가 발생했습니다.'))
	}
}

function* logIn(action) {
	try {
		const { data } = yield call(apis.loginAPI, action.data)
		toast.success(`${data.user.nickname}님 반갑습니다!`)
		setCookie('auth', data.token, {
			path: '/',
			secure: true,
			sameSite: 'none'
		})
		yield put(actions.logInSuccess(data.user))
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(actions.logInFailure(message ? message : '에러가 발생했습니다.'))
	}
}

function* getUserTotal() {
	try {
		const { data } = yield call(apis.getUserTotalAPI)
		yield put(actions.getUserTotalSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.getUserTotalFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* changeNickname(action) {
	try {
		const { data } = yield call(apis.changeNicknameAPI, action.data)
		toast.success('닉네임을 변경하였습니다!')
		yield put(actions.changeNicknameSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(
			actions.changeNicknameFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* uploadImg(action) {
	try {
		const { data } = yield call(apis.updateImgAPI, action.data)
		toast.success('프로필 사진을 변경했습니다!')
		yield put(actions.uploadImgSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(
			actions.uploadImgFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* deleteImg() {
	try {
		const { data } = yield call(apis.deleteImgAPI)
		toast.success('프로필 사진을 삭제했습니다!')
		yield put(actions.deleteImgSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(
			actions.deleteImgFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* deleteUser(action) {
	try {
		yield call(apis.deleteUserAPI, action.data)
		removeCookie('auth')
		yield put(actions.deleteUserSuccess())
	} catch (error) {
		const { message } = error.response.data
		toast.error(message ? message : '잠시 후에 시도해주세요.')
		yield put(
			actions.deleteUserFailure(message ? message : '에러가 발생했습니다.')
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

function* watchGetUserTotal() {
	yield takeLatest(types.GET_USER_TOTAL_REQUEST, getUserTotal)
}

function* watchChangeNickname() {
	yield takeLatest(types.CHANGE_NICKNAME_REQUEST, changeNickname)
}

function* watchUploadImg() {
	yield takeLatest(types.UPLOAD_IMG_REQUEST, uploadImg)
}

function* watchDeleteImg() {
	yield takeLatest(types.DELETE_IMG_REQUEST, deleteImg)
}

function* watchDeleteUser() {
	yield takeLatest(types.DELETE_USER_REQUEST, deleteUser)
}

export default function* userSaga() {
	yield all([
		fork(watchLoadMyInfo),
		fork(watchSignUp),
		fork(watchLogIn),
		fork(watchGetUserTotal),
		fork(watchChangeNickname),
		fork(watchUploadImg),
		fork(watchDeleteImg),
		fork(watchDeleteUser)
	])
}
