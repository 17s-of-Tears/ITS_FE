import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const MainContainer = styled.div`
	padding-top: 3%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	gap: 30px;
	width: 50%;
	min-width: 812px;

	.progress {
		width: 100%;
		background-color: ${colors.gray_ee};
		height: 15px;
		border-radius: 7.5px;
	}

	.making_title {
		font-size: ${theme.fontSizes.subTitleSize};
	}

	.box {
		width: 100%;
		border-radius: 10px;
		background-color: ${colors.white_ff};
		padding: 25px 25px;

		.box__title {
			gap: 10px;
			.title__txt1 {
				font-size: ${theme.fontSizes.xxl};
				margin-right: 5px;
			}
			.title__txt2 {
				font-size: ${theme.fontSizes.base};
				color: ${colors.gray_aa};
			}
		}

		hr {
			border: solid 0.5px #f1f3f7;
			margin: 25px 0px;
		}

		.box__purpose {
			display: flex;
			justify-content: space-evenly;
			gap: 25px;
			> div {
				padding: 25px 0px;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 10px;
				width: 50%;
				gap: 10px;
				border: solid 1px ${colors.gray_ee};
				cursor: pointer;
				&:hover {
					border: solid 1px ${colors.primary};
				}
				.purpose__txt1 {
					font-size: ${theme.fontSizes.base};
					color: ${colors.gray_aa};
				}
				.purpose__txt2 {
					font-size: ${theme.fontSizes.xl};
				}
			}
		}

		.box__skill {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			.skill__box {
				display: flex;
				gap: 20px;
				> div {
					width: 50%;
					padding: 5% 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 15.5px;
					border: solid 1px ${colors.gray_ee};
					border-radius: 10px;
					cursor: pointer;
					&:hover {
						border: solid 1px ${colors.primary};
					}
					svg {
						width: 45px;
					}
					.skill__txt {
						font-size: ${theme.fontSizes.lg};
						color: ${colors.gray_33};
					}
				}
			}
		}

		.box__name {
			width: 100%;
			height: 50px;
			border: solid 1px ${colors.gray_aa};
			border-radius: 10px;
			font-size: ${theme.fontSizes.base};
			padding-left: 10px;
		}

		.box__description {
			width: 100%;
			height: 150px;
			border: solid 1px ${colors.gray_aa};
			border-radius: 10px;
			font-size: ${theme.fontSizes.base};
			padding: 15px 0px 0px 15px;
		}
	}

	.box__success {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
		font-size: ${theme.fontSizes.base};
	}
	.success__img {
		width: 200px;
		height: 200px;
	}
	.success__txt1 {
		font-size: ${theme.fontSizes.big};
		color: ${colors.gray_33};
		.success__txt2 {
			color: ${colors.primary};
			font-weight: 600;
		}
	}
`
export const Progress = styled.div`
	background-color: ${colors.primary};
	width: ${props => props.width};
	height: 100%;
	transition: width 0.3s;
	border-radius: 7.5px;
`

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	> button {
		width: 50%;
		height: 50px;
		border-radius: 10px;
		font-size: 20px;
		transition: 0.3s;
		&:hover {
			filter: brightness(80%);
		}
	}
	.beforebtn {
		color: ${colors.gray_33};
		background-color: ${colors.gray_ee};
	}
	.nextbtn {
		color: ${colors.white_ff};
		background-color: ${colors.primary};
	}
`
