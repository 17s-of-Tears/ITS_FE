import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as apis from '@/api/comment'
import * as types from './comment.types'
import * as actions from './comment.actions'
import * as teamActions from '../team/team.actions'

//* sagas
function* createComment(action) {
	try {
		const { data } = yield call(apis.createCommentAPI, action.id, action.data)
		yield put(teamActions.addCommentAction(data))
		yield put(actions.createCommentSuccess(data))
	} catch (error) {
		const { message } = error.response.data
		yield put(
			actions.createCommentFailure(message ? message : '에러가 발생했습니다.')
		)
	}
}

//* watch
function* watchCreateComment() {
	yield takeLatest(types.CREATE_COMMENT_REQUEST, createComment)
}

export default function* commentSaga() {
	yield all([fork(watchCreateComment)])
}
