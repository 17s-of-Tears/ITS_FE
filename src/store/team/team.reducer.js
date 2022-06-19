import produce from 'immer'
import * as actions from './team.types'

const initialState = {
	createTeamLoading: false,
	createTeamDone: false,
	createTeamError: null
}

const teamReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* LOAD_MY_INFO
			case actions.CREATE_TEAM_FAILURE:
				draft.createTeamLoading = true
				draft.createTeamDone = false
				draft.createTeamError = null
				break
			case actions.CREATE_TEAM_REQUEST:
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
