import styled from 'styled-components'

export const MainContainer = styled.div`
	.Its {
		color: ${({ theme }) => theme.colors.primary};
	}

	.home__main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 250px;
		padding: 100px 0px;

		&--title {
			display: flex;
			flex-direction: column;
			gap: 10px;
			font-weight: 400;

			&__main {
				font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			}

			&__sub {
				font-size: ${({ theme }) => theme.fontSizes.lg};
			}

			&__btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180px;
				font-size: ${({ theme }) => theme.fontSizes.lg};
			}
		}
		> img {
			width: 400px;
		}
	}
	.home__content {
		background-color: ${({ theme }) => theme.colors.white_ff};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 100px;
		padding: 100px 0px;

		&--hr {
			border: solid 1px ${({ theme }) => theme.colors.gray_ee};
			width: 1180px;
		}

		&--study {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 550px;

			> img {
				width: 250px;
			}
		}

		&--project {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 630px;

			> img {
				width: 250px;
			}
		}

		span {
			font-size: ${({ theme }) => theme.fontSizes.big};
		}
	}

	.home__done {
		display: flex;
		flex-direction: column;
		justify-content: center;

		&--data {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 100px;
		}

		.data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 1440px) {
		.home__main {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 200px;
			padding: 100px 0px;

			&--title {
				display: flex;
				flex-direction: column;
				gap: 10px;

				&__main {
					font-size: ${({ theme }) => theme.fontSizes.big};
				}

				&__sub {
					font-size: ${({ theme }) => theme.fontSizes.base};
				}

				&__btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 160px;
					font-size: ${({ theme }) => theme.fontSizes.base};
				}
			}

			> img {
				width: 350px;
			}
		}
		.home__content {
			background-color: ${({ theme }) => theme.colors.white_ff};
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 100px;
			padding: 100px 0px;

			&--hr {
				border: solid 1px ${({ theme }) => theme.colors.gray_ee};
				width: 1000px;
			}

			&--study {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 450px;

				> img {
					width: 200px;
				}
			}

			&--project {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 530px;

				> img {
					width: 200px;
				}
			}

			span {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}
		}
	}
	@media screen and (max-width: 1024px) {
		.home__main {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 50px;
			padding: 100px 0px;

			&--title {
				display: flex;
				flex-direction: column;
				gap: 10px;

				&__main {
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
				}

				&__sub {
					font-size: ${({ theme }) => theme.fontSizes.small};
				}

				&__btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 140px;
					font-size: ${({ theme }) => theme.fontSizes.small};
				}
			}
			> img {
				width: 300px;
			}
		}
		.home__content {
			background-color: ${({ theme }) => theme.colors.white_ff};
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 100px;
			padding: 100px 0px;

			&--hr {
				border: solid 1px ${({ theme }) => theme.colors.gray_ee};
				width: 750px;
			}

			&--study {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 300px;

				> img {
					width: 150px;
				}
			}

			&--project {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 350px;

				> img {
					width: 150px;
				}
			}

			span {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
			}
		}
	}
	@media screen and (max-width: 768px) {
		.home__main {
			display: flex;
			flex-direction: column;

			&--title {
				display: flex;
				flex-direction: column;
				gap: 10px;

				&__main {
					font-size: ${({ theme }) => theme.fontSizes.xxl};
				}
			}
		}
		.home__content {
			&--hr {
				border: solid 1px ${({ theme }) => theme.colors.gray_ee};
				width: 450px;
			}

			&--study {
				display: flex;
				flex-direction: column;
				gap: 100px;
			}

			&--project {
				display: flex;
				flex-direction: column-reverse;
				gap: 100px;
			}
		}
	}
`
