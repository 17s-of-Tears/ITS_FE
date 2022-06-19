import produce from 'immer'
import * as actions from './host.types'

const initialState = {
	hostPageNum: 0
}

const hostReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case actions.PREV_HOST_PAGE:
				draft.hostPageNum -= 1
				break
			case actions.NEXT_HOST_PAGE:
				draft.hostPageNum += 1
				break
			case actions.CLEAR_HOST_PAGE:
				draft.hostPageNum = 0
				break
			default:
				break
		}
	})

export default hostReducers
