import { combineReducers } from 'redux'

import hostReducers from './host/host.reducer'
import teamReducers from './team/team.reducer'
import userReducers from './user/user.reducer'

const rootReducer = combineReducers({
	host: hostReducers,
	team: teamReducers,
	user: userReducers
})

export default rootReducer
