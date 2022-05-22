import { all, fork } from 'redux-saga/effects'

function* rootSaga() {
	yield all([fork(userSaga)])
}

export default rootSaga
