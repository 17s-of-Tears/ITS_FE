import * as types from './team.types'

//* 팀만들기
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
