import styled from 'styled-components'

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
	.modal__notice {
		width: 812px;
		height: 405px;
		background-color: ${({ theme }) => theme.colors.white_ff};
		border-radius: 10px;
		padding: 30px 30px 0px 30px;
		display: flex;
		flex-direction: column;
		.modal__notice_close {
			display: flex;
			justify-content: flex-end;
			background-color: #fff;
			svg {
				width: 24px;
				height: 24px;
				background-color: #fff;
			}
		}
		p {
			font-size: 20px;
			color: ${({ theme }) => theme.colors.gray_77};
			margin-top: 50px;
		}
	}
`
