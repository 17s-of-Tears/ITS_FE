import { comment } from '.'

export const createCommentAPI = ({ id }, data) => {
	console.log(data.author)
	return comment.post(`${id}`, { ...data })
}
