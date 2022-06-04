import produce from 'immer'
import * as actions from './team.types'

const initialState = {
	createTeamLoading: false,
	createTeamDone: false,
	createTeamError: null,
	teamList: null,
	teamData: null
}

const teamReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* CREATE_TEAM
			case actions.CREATE_TEAM_REQUEST:
				draft.createTeamLoading = true
				draft.createTeamDone = false
				draft.createTeamError = null
				break
			case actions.CREATE_TEAM_SUCCESS:
				draft.createTeamLoading = false
				draft.createTeamDone = true
				draft.me = action.data
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
