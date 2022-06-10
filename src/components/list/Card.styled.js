import styled from 'styled-components'

export const CardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	border-radius: 5px;
	padding: 30px;
	cursor: pointer;
	transition: 300ms;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			&-category {
				font-size: ${({ theme }) => theme.fontSizes.lg};
				@media ${({ theme }) => theme.device.tabletL} {
					font-size: ${({ theme }) => theme.fontSizes.small};
				}
			}
			&-title {
				font-size: ${({ theme }) => theme.fontSizes.xl};
				@media ${({ theme }) => theme.device.tabletL} {
					font-size: ${({ theme }) => theme.fontSizes.base};
				}
			}
			&-date {
			}
		}

		&__skill {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;

			&-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}

		&__liker {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
		}

		.color {
			&-aa {
				color: ${({ theme }) => theme.colors.gray_aa};
			}
		}

		.font-small {
			font-size: ${({ theme }) => theme.fontSizes.base};
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}
	}
`
