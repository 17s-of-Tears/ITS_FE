import * as types from './team.types'

//* 팀 리스트 조회
export const getTeamListRequest = data => ({
	type: types.GET_TEAM_LIST_REQUEST,
	data
})
export const getTeamListSuccess = data => ({
	type: types.GET_TEAM_LIST_SUCCESS,
	data
})
export const getTeamListFailure = error => ({
	type: types.GET_TEAM_LIST_FAILURE,
	error
})

//* 팀 상세 조회
export const getTeamRequest = data => ({
	type: types.GET_TEAM_REQUEST,
	data
})
export const getTeamSuccess = data => ({
	type: types.GET_TEAM_SUCCESS,
	data
})
export const getTeamFailure = error => ({
	type: types.GET_TEAM_FAILURE,
	error
})

//* 총 팀 갯수 조회
export const getTeamTotalRequest = () => ({
	type: types.GET_TEAM_TOTAL_REQUEST
})
export const getTeamTotalSuccess = data => ({
	type: types.GET_TEAM_TOTAL_SUCCESS,
	data
})
export const getTeamTotalFailure = error => ({
	type: types.GET_TEAM_TOTAL_FAILURE,
	error
})

//* 조회수 증가
export const incViewCountRequest = data => ({
	type: types.INC_VIEW_COUNT_REQUEST,
	data
})
export const incViewCountSuccess = () => ({
	type: types.INC_VIEW_COUNT_SUCCESS
})
export const incViewCountFailure = error => ({
	type: types.INC_VIEW_COUNT_FAILURE,
	error
})

//* 팀 만들기
export const createTeamRequest = data => ({
	type: types.CREATE_TEAM_REQUEST,
	data
})
export const createTeamSuccess = () => ({
	type: types.CREATE_TEAM_SUCCESS
})
export const createTeamFailure = error => ({
	type: types.CREATE_TEAM_FAILURE,
	error
})

//* 동기액션
export const addCommentAction = data => ({
	type: types.ADD_COMMENT_ACTION,
	data
})
