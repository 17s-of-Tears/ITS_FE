import { all, fork } from 'redux-saga/effects'
import userSaga from './user/user.sagas'

function* rootSaga() {
	yield all([fork(userSaga)])
}

export default rootSaga
