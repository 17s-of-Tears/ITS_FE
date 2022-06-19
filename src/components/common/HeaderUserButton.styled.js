import styled from 'styled-components'

export const UserButtonWrapper = styled.div`
	position: relative;
`

export const UserAvatar = styled.img`
	width: 50px;
	height: 50px;
	cursor: pointer;
	transition: all 250ms ease;

	&:hover {
		filter: brightness(80%);
	}
`

export const UserPopUp = styled.div`
	position: absolute;
	top: 100%;
	right: 0%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 150px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	padding: 20px;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
`

export const PopupMenu = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.base};
	transition: all 250ms ease;
	color: ${({ theme }) => theme.colors.gray_33};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`
