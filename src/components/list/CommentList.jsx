import { useSelector } from 'react-redux'
import { CommentListContainer } from './CommentList.styled'

const CommentList = () => {
	const { teamInfo } = useSelector(state => state.team)

	console.log(teamInfo)

	return (
		<CommentListContainer>
			{teamInfo?.comments.map(({ id, author, content, createDate }) => (
				<div key={id}>
					<div>{author}</div>
					<div>날짜: {createDate}</div>
					<div>내용: {content}</div>
				</div>
			))}
		</CommentListContainer>
	)
}

export default CommentList
