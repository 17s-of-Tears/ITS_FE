import React from 'react'
import Button from '../common/Button'

import { DetailCommentContainer } from './DetailComment.styled'

const DetailComment = () => {
	return (
		<DetailCommentContainer>
			<span className="detailcomment__info">총 2개의 댓글이 있어요</span>
			<textarea
				className="detailcomment__box"
				placeholder="호수님,댓글을 남겨보세요!"
			/>
			<div className="detailcomment__btn">
				<Button>댓글 등록하기</Button>
			</div>
		</DetailCommentContainer>
	)
}

export default DetailComment
