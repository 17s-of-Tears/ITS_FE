import styled from 'styled-components'

export const HeaderContainer = styled.div`
	height: 80px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 14.5%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;
	background-color: white;

	.header {
		&__button {
			font-size: ${({ theme }) => theme.fontSizes.base};
			background-color: ${({ theme }) => theme.colors.primary};
			border: none;
			color: white;
			border-radius: 8px;
			padding: 8px 12px;
			transition: 0.3s;
			cursor: pointer;

			&:hover {
				filter: brightness(80%);
			}
		}
	}
`
