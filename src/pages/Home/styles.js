import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const MainContainer = styled.div`
	margin: auto 0;

	.Its {
		color: ${colors.primary};
		font-weight: 500;
	}
	.home {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 10% 0;

		&__title {
			display: flex;
			flex-direction: column;
			gap: 20px;
			width: 45%;

			&__main {
				font-size: ${theme.fontSizes.subTitleSize};
				font-weight: 300;
				> span {
					font-weight: 500;
				}
			}

			&__sub {
				font-size: ${theme.fontSizes.base};
				color: ${colors.gray_33};
				font-weight: 300;
			}

			&__btn {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				gap: 10px;
				width: 23%;
				background-color: ${colors.primary};
				color: ${colors.white_ff};
				font-size: ${theme.fontSizes.base};
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
			width: 20%;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: ${colors.white_ff};
		border: solid 1px ${colors.gray_ee};

		hr {
			border: solid 1px ${colors.gray_ee};
			width: 65%;
		}
		img {
			width: 35%;
		}
		> div {
			font-size: ${theme.fontSizes.subTitleSize};
			padding: 10% 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 65%;
			font-weight: 300;
		}
	}

	.done {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 80px;
		width: 100%;
		padding: 10% 0;

		> div {
			width: 65%;
		}

		&__title {
			font-size: ${theme.fontSizes.subTitleSize};
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
					color: ${colors.gray_55};
					font-size: ${theme.fontSizes.xxxl};
				}
				&__2 {
					font-weight: 500;
					font-size: 64px;
				}
				&__3 {
					font-size: ${theme.fontSizes.xxsmall};
					color: ${colors.gray_aa};
				}
			}
			svg {
				width: 60px;
				height: 60px;
				fill: ${colors.gray_55};
			}
		}
	}
`
