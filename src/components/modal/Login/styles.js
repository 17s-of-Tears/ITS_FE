import styled from 'styled-components'
import colors from 'styles/colors'

export const LoginContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	margin: auto;
	padding: 150px 623px 0px 623px;
	display: grid;
	.modal__login {
		padding: 50px 30px;
		width: 674px;
		height: 660px;
		background-color: ${colors.white_ff};
	}
	.modal__login_close {
		width: 24px;
		height: 24px;
	}
	.modal__login_its {
		color: ${colors.primary};
		font-weight: bold;
		font-size: 30px;
	}
	.modal__login_lg {
		color: ${colors.gray_33};
		font-size: 40px;
		font-weight: 500;
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
		gap: 5px;
		&:hover {
			filter: brightness(80%);
		}
	}
	.modal__login_btn2 {
		width: 614px;
		height: 60px;
		background-color: ${colors.black_22};
		font-size: 25px;
		color: white;
		border-radius: 8px;
		padding: 8px 12px;
		font-family: Noto Sans, Noto Sans KR;
		transition: 0.3s;
		gap: 5px;
		&:hover {
			filter: brightness(80%);
		}
	}
`
