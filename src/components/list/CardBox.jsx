import cardData from '@/data/cardData'
import React from 'react'
import Card from './Card'
import { CardBoxContainer } from './CardBox.styled'

const CardBox = () => {
	return (
		<CardBoxContainer>
			<div className="cardbox__title">
				<span className="cardbox__title-team">총 N개의 팀</span>
				<span className="cardbox__title-info">
					관심있는 팀에 댓글을 남겨 팀에 참여해 보세요!
				</span>
			</div>
			<div className="cardbox__list">
				{cardData.map(data => (
					<Card key={data.id} {...data} />
				))}
			</div>
		</CardBoxContainer>
	)
}

export default CardBox
