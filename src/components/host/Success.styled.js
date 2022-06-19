import styled from 'styled-components'

export const SuccessContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	.success {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.big};
			> span {
				color: ${({ theme }) => theme.colors.primary};
				font-weight: 600;
			}
		}

		&__content {
			width: 100%;
			background-color: white;
			border: 1px solid ${({ theme }) => theme.colors.lineColor};
			border-radius: 10px;
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			font-size: ${({ theme }) => theme.fontSizes.base};
		}
	}
`
