import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20;
	.modal__register {
		width: 45%;
		height: 43%;
		background-color: ${colors.white_ff};
		border-radius: 10px;
		padding: 30px 30px 0px 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		.modal__register_close {
			display: flex;
			justify-content: flex-end;
			background-color: #fff;
			svg {
				width: 24px;
				height: 24px;
				background-color: #fff;
			}
		}
		.modal__register_img {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			img {
				width: 80px;
				height: 80px;
			}
			span {
				font-size: ${theme.fontSizes.xxl};
			}
		}
		.modal__register_txt {
			font-size: ${theme.fontSizes.xl};
			color: ${colors.gray_55};
		}
		.modal__register_tbox {
			height: 12%;
			border: solid 1px ${colors.gray_aa};
			border-radius: 10px;
		}
		.modla__register_clear {
			background-color: ${colors.primary};
			color: ${colors.white_ff};
			height: 12%;
			border-radius: 10px;
			font-size: ${theme.fontSizes.xl};
		}
	}
`
