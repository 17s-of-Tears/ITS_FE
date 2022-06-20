import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackArrow } from '@/assets/svg/back_arrow.svg'

import DetailAside from '@/components/list/DetailAside'
import AppLayout from '@/components/layouts/AppLayout'

import DetailTitle from '../components/list/DetailTitle'
import DetailContent from '../components/list/DetailContent'
import DetailComment from '../components/list/DetailComment'
import { ListDetailContainer } from './DetailPage.styled'
import { useDispatch, useSelector } from 'react-redux'
import { UserAvatar } from '../components/common/HeaderUserButton.styled'

const ListDetail = () => {
	const navigate = useNavigate()
	const onMoveToPage = () => navigate('/list')

	const [comments, setComments] = useState([])

	const nextId = useRef(1)

	const onInsert = useCallback(
		content => {
			const comment = {
				id: nextId.current,
				content
			}
			console.log(content)
			setComments(comments => comments.concat(comment))
			nextId.current += 1
		},
		[comments]
	)

	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)

	return (
		<AppLayout>
			<ListDetailContainer>
				<div className="listdetail__left">
					<div className="back" onClick={onMoveToPage}>
						<BackArrow />
					</div>

					<DetailTitle />

					<hr />

					<DetailContent />

					<hr />

					<DetailComment onInsert={onInsert} />
					<div className="comment-list">
						{comments.map(comment => {
							return (
								<div
									key={comment.id}
									id={comment.id}
									className="comment-list-element"
								>
									<div className="comment-list-element-user">
										<UserAvatar
											src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`}
										/>
										{me.nickname}
									</div>
									<hr />
									{comment.content}
								</div>
							)
						})}
					</div>
				</div>
				{/* <div className="listdetail__right">
					<DetailAside />
				</div> */}
			</ListDetailContainer>
		</AppLayout>
	)
}
export default ListDetail
