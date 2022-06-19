import React, { useCallback, useState } from 'react'
import Button from '../common/Button'

import { DetailCommentContainer } from './DetailComment.styled'

const DetailComment = ({ onInsert }) => {
	const [value, setValue] = useState({
		content: ''
	})

	const onChangeContent = useCallback(
		e => {
			setValue({
				content: e.target.value
			})
		},
		[value]
	)

	const onSubmit = useCallback(
		e => {
			onInsert(value.content)
			setValue({
				content: ''
			})
			e.preventDefault()
		},
		[onInsert, value]
	)

	return (
		<DetailCommentContainer>
			<form className="detailcomment" onSubmit={onSubmit}>
				<span className="detailcomment__info">총 n개의 댓글이 있어요</span>
				<textarea
					className="detailcomment__box"
					placeholder="호수님,댓글을 남겨보세요!"
					value={value.content}
					onChange={onChangeContent}
				/>
				<div className="detailcomment-btn">
					<Button type="submit ">댓글 등록하기</Button>
				</div>
			</form>
		</DetailCommentContainer>
	)
}

export default DetailComment
