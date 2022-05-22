import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@lib/api/users'
import * as actions from '@store/user/user.types'
import * as types from '@store/user/user.actions'

//* sagas
function* signUp(action) {
	try {
		const { data } = yield call(apis.signUpAPI, action.data)
		yield put(types.signUpSuccess(data))
	} catch (error) {
		yield put(types.signUpFailure(error))
	}
}

function* logIn(action) {
	try {
		const { data } = yield call(apis.logInAPI, action.data)
		yield put(types.logInSuccess(data))
	} catch (error) {
		yield put(types.logInFailure(error))
	}
}

//* watch
function* watchSignUp() {
	yield takeLatest(actions.SIGN_UP_REQUEST, signUp)
}

function* watchLogIn() {
	yield takeLatest(actions.LOG_IN_REQUEST, logIn)
}

export default function* userSaga() {
	yield all([fork(watchSignUp), fork(watchLogIn)])
}
