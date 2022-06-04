import { all, fork } from 'redux-saga/effects'

import teamSaga from './team/team.sagas'
import userSaga from './user/user.sagas'

function* rootSaga() {
	yield all([fork(userSaga), fork(teamSaga)])
}

export default rootSaga
