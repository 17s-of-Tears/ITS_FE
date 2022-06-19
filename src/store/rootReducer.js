import { combineReducers } from 'redux'

import hostReducers from './host/host.reducer'
import userReducers from './user/user.reducer'

const rootReducer = combineReducers({
	host: hostReducers,
	user: userReducers
})

export default rootReducer
