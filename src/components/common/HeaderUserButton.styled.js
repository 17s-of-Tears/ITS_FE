import styled, { css } from 'styled-components'
import { ReactComponent } from '@/assets/svg/bottom_arrow.svg'

export const UserButtonWrapper = styled.div`
	position: relative;
`

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`

export const UserName = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.base};
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 4px;
`

export const BottomArrow = styled(ReactComponent)`
	fill: ${({ theme }) => theme.colors.gray_33};
	transition: all 250ms ease;

	&.active {
		transform: rotate(180deg);
	}
`

export const UserAvatar = styled.img`
	width: 45px;
	height: 45px;
	transition: all 250ms ease;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	background-color: ${({ theme }) => theme.colors.gray_ea};

	${({ isHover }) =>
		isHover &&
		css`
			&:hover {
				filter: brightness(80%);
			}
		`};
`

export const UserPopUp = styled.div`
	position: absolute;
	top: 110%;
	right: 0%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 200px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	padding: 20px;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
`

export const PopupHeader = styled.div`
	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lineColor};
	display: flex;
	gap: 15px;
	color: ${({ theme }) => theme.colors.gray_77};
`

export const PopupMenu = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.base};
	transition: all 250ms ease;
	color: ${({ theme }) => theme.colors.gray_33};
	padding: 10px;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.bgColor};
	}
`
