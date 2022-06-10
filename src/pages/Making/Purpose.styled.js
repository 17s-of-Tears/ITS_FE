import styled from 'styled-components'

export const PurposeContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	border: solid 1px transparent;
	border-radius: 10px;
	.purpose {
		&__title {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: ${({ theme }) => theme.fontSizes.xxl};

			&-sub {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: ${({ theme }) => theme.colors.gray_aa};
			}
		}

		&__content {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
		}
	}
`
