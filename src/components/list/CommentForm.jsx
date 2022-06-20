import { useDispatch, useSelector } from 'react-redux'

import useInput from '@/hooks/useInput'
import { createCommentRequest } from '@/store/comment/comment.actions'
import Button from '../common/Button'
import TextArea from '../common/TextArea'
import { CommentFormContainer } from './CommentForm.styled'

const CommentForm = () => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)
	const { teamInfo } = useSelector(state => state.team)

	const [comment, onChangeComment, setComment] = useInput('')

	const onSubmitComment = () => {
		const comments = { author: me.id, content: comment }
		dispatch(createCommentRequest({ id: teamInfo?.id }, comments))
		setComment('')
	}

	return (
		<CommentFormContainer>
			<TextArea
				value={comment}
				onChange={onChangeComment}
				placeholder="댓글을 입력해주세요!"
			/>
			<Button onClick={onSubmitComment}>댓글 작성</Button>
		</CommentFormContainer>
	)
}

export default CommentForm
