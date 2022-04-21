import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const MainContainer = styled.div`
	justify-content: space-between;
	align-items: center;
	padding: 10% 14.5%;
	.home__intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.home__intro_txt {
			font-size: ${theme.fontSizes.titleSize};
			color: ${colors.gray_33};
			font-family: Noto Sans, Noto Sans KR;
			span {
				font-weight: 600;
			}
		}
		.home__intro_plat {
			display: flex;
			gap: 10px;
		}
		.home__intro_stxt {
			font-size: 20px;
			color: ${colors.gray_77};
			margin-top: 20px;
		}
		.home__intro_stxt2 {
			font-size: ${theme.fontSizes.xl};
			color: ${colors.primary};
		}
		.home__intro_btn {
			display: flex;
			align-items: center;
			background-color: ${colors.primary};
			font-size: ${theme.fontSizes.xl};
			color: white;
			border-radius: 8px;
			padding: 8px 12px;
			margin-top: 20px;
			font-family: Noto Sans, Noto Sans KR;
			transition: 0.3s;
			gap: 5px;
			&:hover {
				filter: brightness(80%);
			}
		}
	}

	.home__preview {
		margin-top: 150px;
		width: 100%;
	}

	.home__result {
		margin-top: 100px;
		align-items: center;
	}
	.home__result_txt {
		font-size: ${theme.fontSizes.subTitleSize};
		color: ${colors.gray_33};
		font-family: Noto Sans, Noto Sans KR;
	}
	.home__result_txt2 {
		font-size: ${theme.fontSizes.xxxl};
		span {
			font-weight: 600;
		}
	}
	.home__result_plat {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.home__result_stxt {
		font-size: ${theme.fontSizes.base};
	}
	.home__result_img {
		display: flex;
		justify-content: space-evenly;
		text-align: center;
		margin-top: 100px;
	}
	.home__result_txt3 {
		font-size: ${theme.fontSizes.subTitleSize};
		color: ${colors.gray_55};
		font-weight: 600;
		margin-top: 15px;
		span {
			font-size: 20px;
			color: ${colors.gray_aa};
		}
	}
	.home__result_txt4 {
		color: ${colors.gray_55};
		font-size: ${theme.fontSizes.xl};
		margin-top: 15px;
	}
	.home__result_svg {
		width: 130px;
		height: 130px;
		fill: ${colors.gray_55};
	}
	.home__btn_svg {
		margin-top: 2px;
		width: 15px;
		height: 15px;
	}
`
