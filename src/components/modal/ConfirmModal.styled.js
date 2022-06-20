import styled from 'styled-components'

export const ConfirmModalContainer = styled.div`
	width: 80%;
	min-width: 525px;
	padding: 40px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	display: flex;
	flex-direction: column;
	gap: 15px;
	.confirm {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.big};
			font-weight: 600;
		}
		&__info {
			display: flex;
			flex-direction: column;
			font-size: ${({ theme }) => theme.fontSizes.xl};
			color: ${({ theme }) => theme.colors.gray_77};
		}
		&__btn {
			display: flex;
			justify-content: flex-end;
			gap: 10px;
			&-close {
				background-color: ${({ theme }) => theme.colors.gray_aa};
			}
			&-delete {
				background-color: ${({ theme }) => theme.colors.red_74};
			}
		}
	}
`
