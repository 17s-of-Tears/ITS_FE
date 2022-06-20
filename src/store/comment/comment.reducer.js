import produce from 'immer'
import * as actions from './comment.types'

const initialState = {
	createCommentLoading: false,
	createCommentDone: false,
	createCommentError: null
}

const commentReducers = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			//* CREATE_COMMENT
			case actions.CREATE_COMMENT_REQUEST:
				draft.createCommentLoading = true
				draft.createCommentDone = false
				draft.createCommentError = null
				break
			case actions.CREATE_COMMENT_SUCCESS:
				draft.createCommentLoading = false
				draft.createCommentDone = true
				break
			case actions.CREATE_COMMENT_FAILURE:
				draft.createCommentLoading = false
				draft.createCommentError = action.error
				break
			default:
				break
		}
	})

export default commentReducers
