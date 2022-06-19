import produce from 'immer'
import * as actions from './host.types'

const initialState = {
	hostPageNum: 0
}

const teamReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* 동기 액션 실행
			case actions.PREV_HOST_PAGE:
				draft.hostPageNum -= 1
				break
			case actions.NEXT_HOST_PAGE:
				draft.hostPageNum += 1
				break
			default:
				break
		}
	})

export default teamReducers
