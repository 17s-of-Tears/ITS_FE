import * as types from './comment.types'

//* λκΈ μμ±
export const createCommentRequest = (id, data) => ({
	type: types.CREATE_COMMENT_REQUEST,
	id,
	data
})
export const createCommentSuccess = data => ({
	type: types.CREATE_COMMENT_SUCCESS,
	data
})
export const createCommentFailure = error => ({
	type: types.CREATE_COMMENT_FAILURE,
	error
})
