import styled from 'styled-components'

export const GoalCardContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 30px;
`

export const GoalCardItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px 0;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	border-radius: 10px;
	cursor: pointer;
	transition: all 250ms ease;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}
`

export const GoalImage = styled.img`
	width: 100px;
	height: 100px;
`

export const GoalTextGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const GoalTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	color: ${({ theme }) => theme.colors.gray_33};
`

export const GoalDescription = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.gray_aa};
`
