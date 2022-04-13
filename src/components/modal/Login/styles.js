import styled from 'styled-components'
import colors from 'styles/colors'

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 1088px;
	height: 750px;
	text-align: center;
	.modal__service {
		padding: 50px 0px 50px 0px;
		border-radius: 10px;
		background-color: #fff;
		.modal__service_its {
			display: grid;
			grid-template-areas: 'a b c';
			p {
				margin-left: 25px;
				grid-area: b;
			}
			font-size: 30px;
			font-weight: 600;
			color: ${colors.primary};
			.modal__service_close {
				font-size: 20px;
				grid-area: c;
				justify-self: end;
				background-color: #fff;
			}
		}
		.modal__service_both {
			margin-top: 30px;
			display: flex;
			justify-content: center;
			gap: 31px;
			.modal__service_leader {
				width: 391px;
				height: 534px;
				padding: 134px 35px 134px 36px;
				border-radius: 10px;
				border: solid 2px #f1f3f7;
				background-color: #f8f9fd;
				&:hover {
					border: solid 2px ${colors.primary};
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
					border: solid 2px ${colors.primary};
				}
			}
		}
		.modal__service_txt {
			margin-top: 20px;
			font-size: 39px;
			font-weight: 500;
			color: ${colors.gray_33};
		}
		.modal__service_txt2 {
			margin-top: 10px;
			font-size: 18px;
			color: ${colors.gray_77};
		}
		.modal__service_btn {
			width: 292px;
			height: 59px;
			margin: 20px 15px 0 13px;
			display: flex;
			align-items: center;
			background-color: #f8f9fd;
			font-size: 22px;
			color: ${colors.primary};
			border: solid 3px ${colors.primary};
			border-radius: 8px;
			padding: 12px 35px 12px 35px;
			font-family: Noto Sans, Noto Sans KR;
			&:hover {
				background-color: ${colors.primary};
				color: white;
			}
		}
	}
`
