import produce from 'immer'
import * as actions from './team.types'

const initialState = {
	getTeamListLoading: false,
	getTeamListDone: false,
	getTeamListError: null,
	getTeamLoading: false,
	getTeamDone: false,
	getTeamError: null,
	createTeamLoading: false,
	createTeamDone: false,
	createTeamError: null,
	teamList: [],
	teamInfo: null
}

const teamReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* GET_TEAM_LIST
			case actions.GET_TEAM_LIST_REQUEST:
				draft.getTeamListLoading = true
				draft.getTeamListDone = false
				draft.getTeamListError = null
				break
			case actions.GET_TEAM_LIST_SUCCESS:
				draft.getTeamListLoading = false
				draft.getTeamListDone = true
				draft.teamList = action.data
				break
			case actions.GET_TEAM_LIST_FAILURE:
				draft.getTeamListLoading = false
				draft.getTeamListError = action.error
				break
			//* GET_TEAM
			case actions.GET_TEAM_REQUEST:
				draft.getTeamLoading = true
				draft.getTeamDone = false
				draft.getTeamError = null
				draft.teamInfo = null
				break
			case actions.GET_TEAM_SUCCESS:
				draft.getTeamLoading = false
				draft.getTeamDone = true
				draft.teamInfo = action.data
				break
			case actions.GET_TEAM_FAILURE:
				draft.getTeamLoading = false
				draft.getTeamError = action.error
				break
			//* CREATE_TEAM
			case actions.CREATE_TEAM_REQUEST:
				draft.createTeamLoading = true
				draft.createTeamDone = false
				draft.createTeamError = null
				break
			case actions.CREATE_TEAM_SUCCESS:
				draft.createTeamLoading = false
				draft.createTeamDone = true
				break
			case actions.CREATE_TEAM_FAILURE:
				draft.createTeamLoading = false
				draft.createTeamError = action.error
				break
			default:
				break
		}
	})

export default teamReducers
