import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const MainContainer = styled.div`
	hr {
		display: flex;
	}
	.list__top {
		margin-top: 50px;
		padding: 0 14.5%;
		font-size: ${theme.fontSizes.subTitleSize};
		font-weight: 500;

		.list__top_filter {
			font-size: ${theme.fontSizes.xxxl};
			font-weight: 400;
			color: ${colors.gray_aa};
		}
	}
	.list__select {
		margin-top: 20px;
		padding: 0 14.5%;
		display: flex;
		justify-content: space-between;
	}
	hr {
		margin-top: 50px;
		border: solid 1px ${colors.gray_dd};
	}
	.list__card_info {
		margin-top: 50px;
		padding: 0 14.5%;
		display: flex;
		align-items: flex-end;
		gap: 10px;
		.list__info_total {
			font-size: ${theme.fontSizes.xxxl};
			color: ${colors.gray_33};
		}
		.list__info_join {
			font-size: ${theme.fontSizes.base};
			color: ${colors.gray_aa};
		}
	}
	.list__card_box {
		margin-top: 80px;
		padding: 0 14.5%;
		gap: 25px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`
export const SubContainer = styled.div`
	margin: 0 auto;
	padding-top: 5%;
	width: 65%;

	.back {
		border: solid 1px ${colors.gray_dd};
		border-radius: 5px;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		svg {
			width: 25px;
			height: 25px;
		}
	}

	.detail {
		display: flex;
		gap: 80px;

		&__content {
			display: flex;
			flex-direction: column;
			width: 70%;
			height: auto;

			&__title {
				font-size: ${theme.fontSizes.subTitleSize};
				padding: 5% 0;
			}

			&__subtitle {
				font-size: ${theme.fontSizes.base};
			}

			&__icon {
				display: flex;
				padding: 1% 0;

				svg {
					width: 40px;
					height: 40px;
				}
			}

			hr {
				width: 100%;
				border: solid 1px ${colors.gray_dd};
			}

			&__write {
				display: flex;
				flex-direction: column;
				gap: 50px;
				padding: 5% 0;
				font-size: ${theme.fontSizes.lg};

				span {
					line-height: 2.5;
				}
			}
			&__comment {
				padding: 5% 0;
				display: flex;
				flex-direction: column;
				gap: 15px;

				textarea {
					background-color: #f8f9fd;
					border: solid 1px ${colors.gray_dd};
					border-radius: 5px;
					padding: 2% 0 0 2%;
					height: 100px;
				}

				&__registerbtn {
					color: ${colors.white_ff};
					background-color: ${colors.primary};
					width: 15%;
					margin-left: auto;
					border-radius: 5px;
					padding: 1.5% 0;
				}
			}
		}
	}
`
