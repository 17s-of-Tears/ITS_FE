import styled from 'styled-components'
import colors from 'styles/colors'

export const LoginContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	padding: 150px 623px 0px 623px;
	margin: auto;
	display: flex;
	p {
		text-align: center;
	}
	.modal__login {
		position: absolute;
		padding: 30px 30px 50px 30px;
		border-radius: 10px;
		background-color: #fff;
		width: 674px;
		height: auto;
		display: flex;
		flex-direction: column;
		.modal__login_close {
			display: flex;
			justify-content: flex-end;
			background-color: #fff;
			svg {
				width: 24px;
				height: 24px;
				background-color: #fff;
			}
		}
		.modal__login_logo {
			display: flex;
			justify-content: center;
		}
		.modal__login_lg {
			color: ${colors.gray_33};
			font-size: 40px;
			font-weight: 500;
			margin-top: 30px;
		}
		.modal__login_em {
			margin-top: 30px;
			width: 614px;
			height: 52px;
			font-size: 18px;
			color: ${colors.gray_aa};
			border: solid 1px ${colors.gray_aa};
			border-radius: 5px;
			padding: 13px 544px 13px 20px;
		}
		.modal__login_pw {
			margin-top: 10px;
			width: 614px;
			height: 52px;
			font-size: 18px;
			color: ${colors.gray_aa};
			border: solid 1px ${colors.gray_aa};
			border-radius: 5px;
			padding: 13px 544px 13px 20px;
		}
		.modal__login_btn1 {
			width: 614px;
			height: 60px;
			background-color: ${colors.primary};
			font-size: 25px;
			color: white;
			border-radius: 8px;
			padding: 8px 12px;
			font-family: Noto Sans, Noto Sans KR;
			transition: 0.3s;
			margin-top: 30px;
			&:hover {
				filter: brightness(80%);
			}
		}
		.modal__login_first {
			font-size: 20px;
			margin-top: 30px;
			color: ${colors.gray_aa};
			span {
				color: ${colors.primary};
			}
		}
		.modal__modal_or {
			margin-top: 30px;
			display: flex;
			align-items: center;
			color: ${colors.gray_aa};
			hr {
				border: 1px solid ${colors.gray_aa};
				width: 45%;
				height: 1px;
			}
		}
		.modal__login_btn2 {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 614px;
			height: 60px;
			background-color: ${colors.black_22};
			font-size: 25px;
			color: white;
			border-radius: 8px;
			padding: 8px 12px;
			font-family: Noto Sans, Noto Sans KR;
			transition: 0.3s;
			margin-top: 30px;
			position: relative;
			&:hover {
				filter: brightness(80%);
			}
			svg {
				position: absolute;
				left: 20px;
				width: 30px;
				height: 30px;
			}
		}
	}
`
