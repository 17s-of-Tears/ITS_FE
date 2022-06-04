import styled from 'styled-components'

export const ServiceModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	padding: 110px 416px 110px 416px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20;

	p {
		text-align: center;
	}

	.modal__service {
		position: absolute;
		padding: 40px 137px 100px 137px;
		border-radius: 10px;
		background-color: #fff;
		width: 1088px;
		height: 830px;
		display: flex;
		flex-direction: column;

		.modal__service_close {
			display: flex;
			justify-content: flex-end;
			background-color: #fff;

			svg {
				width: 24px;
				height: 24px;
				background-color: #fff;
			}
		}

		.modal__service_logo {
			display: flex;
			justify-content: center;
			pointer-events: none;
		}

		.modal__service_both {
			margin-top: 30px;
			display: flex;
			justify-content: center;
			gap: 32px;
			text-align: center;

			.modal__service_leader {
				width: 391px;
				height: 534px;
				padding: 134px 35px 134px 36px;
				border-radius: 10px;
				border: solid 2px #f1f3f7;
				background-color: #f8f9fd;

				&:hover {
					border: solid 2px ${({ theme }) => theme.colors.primary};
				}
			}

			.modal__service_member {
				width: 391px;
				height: 534px;
				padding: 134px 35px 134px 36px;
				border-radius: 10px;
				border: solid 2px #f1f3f7;
				background-color: #f8f9fd;

				&:hover {
					border: solid 2px ${({ theme }) => theme.colors.primary};
				}
			}
		}

		.modal__service_txt {
			margin-top: 20px;
			font-size: 39px;
			font-weight: 500;
			color: ${({ theme }) => theme.colors.gray_33};
		}

		.modal__service_txt2 {
			margin-top: 10px;
			font-size: 18px;
			color: ${({ theme }) => theme.colors.gray_77};
		}

		.modal__service_btn {
			width: 292px;
			height: 59px;
			margin: 20px 15px 0 13px;
			align-items: center;
			background-color: #f8f9fd;
			font-size: 22px;
			color: ${({ theme }) => theme.colors.primary};
			border: solid 3px ${({ theme }) => theme.colors.primary};
			border-radius: 8px;
			padding: 12px 35px 12px 35px;
			font-family: Noto Sans, Noto Sans KR;

			&:hover {
				background-color: ${({ theme }) => theme.colors.primary};
				color: white;
			}
		}
	}
`
