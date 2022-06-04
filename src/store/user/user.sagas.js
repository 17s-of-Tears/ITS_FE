import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '../../api/user'
import * as types from './user.types'
import * as actions from './user.actions'

//* sagas
function* signUp(action) {
	try {
		const { data } = yield call(apis.signUpAPI, action.data)
		yield put(actions.signUpSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(actions.signUpFailure(message ? message : '에러가 발생했습니다.'))
	}
}

function* logIn(action) {
	try {
		const { data } = yield call(apis.loginAPI, action.data)
		yield put(actions.logInSuccess(data.user))
	} catch (error) {
		yield put(actions.logInFailure(error))
	}
}

//* watch
function* watchSignUp() {
	yield takeLatest(types.SIGN_UP_REQUEST, signUp)
}

function* watchLogIn() {
	yield takeLatest(types.LOG_IN_REQUEST, logIn)
}

export default function* userSaga() {
	yield all([fork(watchSignUp), fork(watchLogIn)])
}
