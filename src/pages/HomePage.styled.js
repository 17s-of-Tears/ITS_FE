import styled from 'styled-components'

export const HomePageContainer = styled.div`
	margin: auto 0;

	.Its {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 500;
	}

	.home {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 10% 0;
		gap: 230px;

		&__title {
			display: flex;
			flex-direction: column;
			gap: 20px;

			&__main {
				font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
				font-weight: 300;
				> span {
					font-weight: 500;
				}
			}

			&__sub {
				font-size: ${({ theme }) => theme.fontSizes.lg};
				color: ${({ theme }) => theme.colors.gray_33};
				font-weight: 300;
			}

			&__btn {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				gap: 10px;
				width: 30%;
				background-color: ${({ theme }) => theme.colors.primary};
				color: ${({ theme }) => theme.colors.white_ff};
				font-size: ${({ theme }) => theme.fontSizes.base};
				padding: 1.7% 0 1.5% 0;
				border-radius: 10px;
				&:hover {
					filter: brightness(80%);
				}
				svg {
					width: 10%;
					height: 10%;
				}
			}
		}
		> img {
			width: 25%;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.white_ff};
		border: solid 1px ${({ theme }) => theme.colors.gray_ee};
		padding: 0 14.5%;

		hr {
			border: solid 1px ${({ theme }) => theme.colors.gray_ee};
			width: 100%;
		}

		> div {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			padding: 10% 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-weight: 300;
			gap: 500px;
		}
	}

	.done {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 80px;
		width: 100%;
		padding: 10% 14.5%;

		> div {
			width: 100%;
		}

		&__title {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			font-weight: 300;
		}

		&__data {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.data {
				display: flex;
				flex-direction: column;
				gap: 10px;

				&__1 {
					font-weight: 300;
					color: ${({ theme }) => theme.colors.gray_55};
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
				}
				&__2 {
					font-weight: 500;
					font-size: 64px;

					&__small {
						font-weight: 300;
						color: ${({ theme }) => theme.colors.gray_aa};
						font-size: ${({ theme }) => theme.fontSizes.xxl};
					}
				}
				&__3 {
					font-size: ${({ theme }) => theme.fontSizes.xxsmall};
					color: ${({ theme }) => theme.colors.gray_aa};
				}
			}
			svg {
				width: 60px;
				height: 60px;
				fill: ${({ theme }) => theme.colors.gray_55};
			}
		}
	}
`
