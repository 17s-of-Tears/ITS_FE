import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@/api/team'
import * as types from './team.types'
import * as actions from './team.actions'

//* sagas
function* createTeam(action) {
	try {
		yield call(apis.createTeamAPI, action.data)
		yield put(actions.createTeamSuccess())
	} catch (error) {
		console.log(error)
		yield put(actions.createTeamFailure('에러가 발생했습니다.'))
	}
}

//* watch
function* watchCreateTeam() {
	yield takeLatest(types.CREATE_TEAM_REQUEST, createTeam)
}

export default function* userSaga() {
	yield all([fork(watchCreateTeam)])
}
