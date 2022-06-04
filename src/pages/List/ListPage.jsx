import React from 'react'

import Card from '@/components/list/Card'
import SelectBox from '@/components/list/SelectBox'
import cardData from '@/data/cardData'
import AppLayout from '@/layouts/AppLayout'
import { MainContainer } from './styles'

const ListPage = () => (
	<AppLayout>
		<MainContainer>
			<div className="list__top">
				<span>
					검색 필터 <span className="list__top_filter">| Filter</span>
				</span>
			</div>
			<div className="list__select">
				<SelectBox />
			</div>
			<hr />
			<div className="list__card_info">
				<span className="list__info_total">총 100개의 팀</span>
				<span className="list__info_join">
					관심있는 팀에 댓글을 남겨 팀에 참여해 보세요!
				</span>
			</div>
			<div className="list__card_box">
				{cardData.map(data => (
					<Card key={data.id} {...data} />
				))}
			</div>
		</MainContainer>
	</AppLayout>
)

export default ListPage
