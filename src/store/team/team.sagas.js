import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@/api/team'
import * as types from './team.types'
import * as actions from './team.actions'

//* sagas
function* TeamCreate(action) {
	try {
		const { data } = yield call(apis.createTeamAPI, action.data)
		yield put(actions.logInSuccess(data.user))
	} catch (error) {
		yield put(actions.logInFailure(error))
	}
}

//* watch
function* watchTeamCreate() {
	yield takeLatest(types.CREATE_TEAM_REQUEST, TeamCreate)
}

export default function* teamSaga() {
	yield all([fork(watchTeamCreate)])
}
