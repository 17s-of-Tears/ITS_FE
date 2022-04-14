import styled from 'styled-components'
import colors from 'styles/colors'

export const HeaderContainer = styled.div`
	height: 80px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 278px 0px 267px;
	border-bottom: 1px solid ${colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;
	background-color: white;
	.header__menus {
		display: flex;
		gap: 20px;
		margin-left: 100px;
		a {
			text-decoration: none;
			color: ${colors.gray_77};
			font-size: 20px;
			font-weight: 500;
			transition: 0.3s;
			&:hover {
				filter: brightness(80%);
			}
		}
		.current__page {
			color: ${colors.primary};
			transition: 0.3s;
			&:hover {
				filter: brightness(80%);
			}
		}
	}
	.header__user_btn {
		font-size: 16px;
		border: none;
		background-color: ${colors.primary};
		color: white;
		border-radius: 8px;
		padding: 8px 12px;
		font-family: Noto Sans, Noto Sans KR;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			filter: brightness(80%);
		}
	}
`
