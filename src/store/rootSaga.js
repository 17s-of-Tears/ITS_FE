import { all, fork } from 'redux-saga/effects'

// import hostSaga from './host/host.sagas'
import userSaga from './user/user.sagas'

function* rootSaga() {
	// yield all([fork(hostSaga), fork(userSaga)])
	yield all([fork(userSaga)])
}

export default rootSaga
