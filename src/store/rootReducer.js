import { combineReducers } from 'redux'

import teamReducers from './team/team.reducer'
import userReducers from './user/user.reducer'

const rootReducer = combineReducers({
	user: userReducers,
	team: teamReducers
})

export default rootReducer
