import React from 'react'

import { ReactComponent as ReactIcon } from '@/assets/svg/skills/React.svg'
import { ReactComponent as NodeIcon } from '@/assets/svg/skills/Nodejs.svg'
import { ReactComponent as TypeIcon } from '@/assets/svg/skills/Typescript.svg'
import { DetailTitleContainer } from './DetailTitle.styled'
import { useDispatch, useSelector } from 'react-redux'

const DetailTitle = () => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)
	return (
		<DetailTitleContainer>
			<span className="detailtitle__title">
				같이 팀 프로젝트 하실 분 구해요!
			</span>
			<div className="detailtitle__author">
				<span>{me.nickname}&nbsp;</span>
				<span className="detailtitle__author-date">| 2022-04-01</span>
			</div>
			<div className="detailtitle__icon">
				<ReactIcon />
				<NodeIcon />
				<TypeIcon />
			</div>
		</DetailTitleContainer>
	)
}

export default DetailTitle
