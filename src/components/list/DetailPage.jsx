import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackArrow } from '@/assets/svg/back_arrow.svg'

import DetailAside from '@/components/list/DetailAside'
import AppLayout from '@/layouts/AppLayout'

import DetailTitle from './DetailTitle'
import DetailContent from './DetailContent'
import DetailComment from './DetailComment'
import { ListDetailContainer } from './DetailPage.styled'

const ListDetail = () => {
	const navigate = useNavigate()
	const onMoveToPage = () => navigate('/list')

	return (
		<AppLayout>
			<ListDetailContainer>
				<div className="listdetail__left">
					<div className="back">
						<BackArrow onClick={onMoveToPage} />
					</div>

					<DetailTitle />

					<hr />

					<DetailContent />

					<hr />

					<DetailComment />
				</div>
				<div className="listdetail__right">
					<DetailAside />
				</div>
			</ListDetailContainer>
		</AppLayout>
	)
}
export default ListDetail
