import styled from 'styled-components'

export const DetailAsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 30%;
	height: 100%;
	padding: 2%;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border: solid 1px ${({ theme }) => theme.colors.gray_dd};
	font-size: ${({ theme }) => theme.fontSizes.small};
	border-radius: 10px;

	.aside-box {
		display: flex;
		gap: 5px;

		&__liker {
			display: flex;
			align-items: center;
			gap: 5px;
		}

		&__icon {
			fill: ${({ theme }) => theme.colors.gray_ee};

			&--fill {
				fill: ${({ theme }) => theme.colors.primary};
			}
		}

		&__share-group {
			display: flex;
			align-items: center;
			justify-content: center;
			border: solid 1px ${({ theme }) => theme.colors.gray_dd};
			font-size: ${({ theme }) => theme.fontSizes.xsmall};
			border-radius: 5px;
			width: 33%;
			padding: 3% 0;
			cursor: pointer;

			svg {
				width: 15px;
				height: 15px;
			}
		}
	}
`
