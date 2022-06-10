import styled from 'styled-components'

export const SuccessBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	> svg {
		width: 250px;
		height: 250px;
	}

	.success {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			&-primary {
				color: ${({ theme }) => theme.colors.primary};
				font-weight: 600;
			}
		}

		&__content {
			background-color: ${({ theme }) => theme.colors.white_ff};
			width: 812px;
			padding: 20px 0 20px 30px;
			border: solid 1px transparent;
			border-radius: 10px;
			&-text {
				display: flex;
				flex-direction: column;
				gap: 10px;
				align-items: flex-start;
			}
		}
	}
`
