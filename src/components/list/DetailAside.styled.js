import styled from 'styled-components'

export const DetailAsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 30px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border: solid 1px ${({ theme }) => theme.colors.gray_ea};
	font-size: ${({ theme }) => theme.fontSizes.small};
	border-radius: 10px;

	.detailaside {
		&__btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&-state {
				padding: 5px 0;
				border: solid 1px ${({ theme }) => theme.colors.gray_ea};
				border-radius: 5px;
				width: 30%;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: default;
			}
			&-liker {
				padding: 5px 0;
				border: solid 1px ${({ theme }) => theme.colors.gray_ea};
				border-radius: 5px;
				width: 30%;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 5px;
				cursor: pointer;
				&-icon {
					fill: ${({ theme }) => theme.colors.gray_ee};
					&-fill {
						fill: ${({ theme }) => theme.colors.primary};
					}
				}
			}

			&-sharing {
				padding: 5px 0;
				border: solid 1px ${({ theme }) => theme.colors.gray_ea};
				border-radius: 5px;
				width: 30%;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 5px;
				cursor: pointer;
			}
		}

		&__title {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: ${({ theme }) => theme.fontSizes.base};
			&-bold {
				font-weight: 600;
			}
			&-rectangle {
				width: 3px;
				height: 25px;
				background-color: ${({ theme }) => theme.colors.primary};
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 10px;
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}

	/* .aside-box {
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
	} */
`
