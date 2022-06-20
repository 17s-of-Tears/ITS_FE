import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@/api/team'
import * as types from './team.types'
import * as actions from './team.actions'

//* sagas
function* getTeamList() {
	try {
		const { data } = yield call(apis.getTeamListAPI)
		yield put(actions.getTeamListSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.getTeamListFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* getTeam(action) {
	try {
		const { data } = yield call(apis.getTeamAPI, action.data)
		yield put(actions.getTeamSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.getTeamFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* getTeamTotal() {
	try {
		const { data } = yield call(apis.getTeamTotalAPI)
		yield put(actions.getTeamTotalSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.getTeamTotalFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* incViewCount(action) {
	try {
		yield call(apis.incViewCountAPI, action.data)
		yield put(actions.incViewCountSuccess())
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.incViewCountFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

function* createTeam(action) {
	try {
		yield call(apis.createTeamAPI, action.data)
		yield put(actions.createTeamSuccess())
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.createTeamFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

//* watch
function* watchGetTeamList() {
	yield takeLatest(types.GET_TEAM_LIST_REQUEST, getTeamList)
}

function* watchGetTeam() {
	yield takeLatest(types.GET_TEAM_REQUEST, getTeam)
}

function* watchGetTeamTotal() {
	yield takeLatest(types.GET_TEAM_TOTAL_REQUEST, getTeamTotal)
}

function* watchIncViewCount() {
	yield takeLatest(types.INC_VIEW_COUNT_REQUEST, incViewCount)
}

function* watchCreateTeam() {
	yield takeLatest(types.CREATE_TEAM_REQUEST, createTeam)
}

export default function* userSaga() {
	yield all([
		fork(watchGetTeamList),
		fork(watchGetTeam),
		fork(watchGetTeamTotal),
		fork(watchIncViewCount),
		fork(watchCreateTeam)
	])
}
