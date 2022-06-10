import styled from 'styled-components'

export const IntroContainer = styled.div`
	width: 80%;
	max-width: 1364px;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${({ theme }) => theme.device.tablet} {
		margin-top: 100px;
		flex-direction: column-reverse;
		gap: 50px;
	}

	.intro {
		&__left {
			display: flex;
			flex-direction: column;
			gap: 20px;

			@media ${({ theme }) => theme.device.tablet} {
				gap: 10px;
			}

			&-title {
				font-size: ${({ theme }) => theme.fontSizes.subTitleSize};

				@media ${({ theme }) => theme.device.tabletL} {
					font-size: ${({ theme }) => theme.fontSizes.big};
				}

				@media ${({ theme }) => theme.device.mobileL} {
					font-size: ${({ theme }) => theme.fontSizes.xxl};
				}
			}

			&-label {
				font-size: ${({ theme }) => theme.fontSizes.lg};
			}

			Button {
				width: 40%;
				padding: 10px 0;
			}
		}

		&__right {
			> img {
				width: 482px;
				@media ${({ theme }) => theme.device.tabletL} {
					width: 300px;
				}
			}
		}
	}

	.color {
		&--primary {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	.font {
		&--bold {
			font-weight: 600;
		}

		&--light {
			font-weight: 400;
		}
	}
`
