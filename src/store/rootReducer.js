import { combineReducers } from 'redux'

import commentReducers from './comment/comment.reducer'
import hostReducers from './host/host.reducer'
import teamReducers from './team/team.reducer'
import userReducers from './user/user.reducer'

const rootReducer = combineReducers({
	comment: commentReducers,
	host: hostReducers,
	team: teamReducers,
	user: userReducers
})

export default rootReducer
