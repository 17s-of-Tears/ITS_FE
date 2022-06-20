import produce from 'immer'
import * as actions from './team.types'

const initialState = {
	getTeamListLoading: false,
	getTeamListDone: false,
	getTeamListError: null,
	getTeamLoading: false,
	getTeamDone: false,
	getTeamError: null,
	getTeamTotalLoading: false,
	getTeamTotalDone: false,
	getTeamTotalError: null,
	incViewCountLoading: false,
	incViewCountDone: false,
	incViewCountError: null,
	createTeamLoading: false,
	createTeamDone: false,
	createTeamError: null,
	teamList: [],
	teamInfo: null,
	total: 0
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
			//* GET_TEAM_TOTAL
			case actions.GET_TEAM_TOTAL_REQUEST:
				draft.getTeamTotalLoading = true
				draft.getTeamTotalDone = false
				draft.getTeamTotalError = null
				draft.teamInfo = null
				break
			case actions.GET_TEAM_TOTAL_SUCCESS:
				draft.getTeamTotalLoading = false
				draft.getTeamTotalDone = true
				draft.total = action.data
				break
			case actions.GET_TEAM_TOTAL_FAILURE:
				draft.getTeamTotalLoading = false
				draft.getTeamTotalError = action.error
				break
			//* INC_VIEW_COUNT
			case actions.INC_VIEW_COUNT_REQUEST:
				draft.incViewCountLoading = true
				draft.incViewCountDone = false
				draft.incViewCountError = null
				break
			case actions.INC_VIEW_COUNT_SUCCESS:
				draft.incViewCountLoading = false
				draft.incViewCountDone = true
				break
			case actions.INC_VIEW_COUNT_FAILURE:
				draft.incViewCountLoading = false
				draft.incViewCountError = action.error
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
			//* 동기액션
			case actions.ADD_COMMENT_ACTION:
				draft.teamInfo.comments.push(action.data)
				break
			default:
				break
		}
	})

export default teamReducers
