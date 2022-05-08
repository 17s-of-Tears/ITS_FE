import React, { useState } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

import { ReactComponent as Heart } from 'assets/svg/fill_heart.svg'
import { ReactComponent as Share } from 'assets/svg/sharing.svg'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 30%;
	height: 100%;
	padding: 2%;
	background-color: ${colors.white_ff};
	border: solid 1px ${colors.gray_dd};
	border-radius: 10px;
	font-size: ${theme.fontSizes.small};
	.box {
		display: flex;
		gap: 5px;
		&__liker-button {
			display: flex;
			align-items: center;
			gap: 5px;
		}
		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			border: solid 1px ${colors.gray_dd};
			border-radius: 5px;
			width: 33%;
			padding: 3% 0;
			font-size: ${theme.fontSizes.xsmall};
			cursor: pointer;
			svg {
				width: 15px;
				height: 15px;
			}
		}
	}
`

const DetailAside = () => {
	const [isLiker, setIsLiker] = useState(false)

	const onChangeKiker = () => setIsLiker(prev => !prev)

	return (
		<Container>
			<div className="box">
				<div>모집중</div>
				<div className="box__liker-button" onClick={onChangeKiker}>
					{isLiker ? (
						<Heart fill={colors.primary} /> //* 좋아요
					) : (
						<Heart fill={colors.gray_ee} /> //* 오호수
					)}
					1개
				</div>
				<div>
					<Share />
					공유
				</div>
			</div>
			<span>호수님! 이런 팀은 어떨까요?</span>
			<span>📌 같이 팀프로젝트 하실분 구해요!</span>
		</Container>
	)
}

export default DetailAside
