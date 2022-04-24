import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	padding-top: 3%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	span {
		font-size: 35px;
	}
	.progress {
		background-color: ${colors.gray_ee};
		width: 45%;
		height: 15px;
		border-radius: 7.5px;
	}
	.box {
		width: 45%;
		border-radius: 10px;
		background-color: ${colors.white_ff};
		padding: 25px 25px;
		.box__purpose_txt1 {
			font-size: 22px;
			margin-right: 5px;
		}
		.box__purpose_txt2 {
			font-size: 16px;
			color: ${colors.gray_aa};
		}
		hr {
			border: solid 0.5px #f1f3f7;
			margin-top: 25px;
		}
		.box__purpose_box {
			margin-top: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
			.box__purpose_box1 {
				padding: 20px 0px;
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				border: solid 1px #f1f3f7;
				border-radius: 10px;
				cursor: pointer;
				&:hover {
					border: solid 2px ${colors.primary};
				}
			}
			.box__purpose_box2 {
				padding: 20px 0px;
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				border: solid 1px #f1f3f7;
				border-radius: 10px;
				cursor: pointer;
				&:hover {
					border: solid 2px ${colors.primary};
				}
			}
			.box__purpose_box_txt1 {
				font-size: 14px;
				color: ${colors.gray_aa};
			}
			.box__purpose_box_txt2 {
				font-size: 20px;
				color: ${colors.gray_33};
			}
		}

		.box__skill_txt1 {
			font-size: 22px;
			margin-right: 5px;
		}
		.box__skill_txt2 {
			font-size: 16px;
			color: ${colors.gray_aa};
		}
		.box__skill {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			.box__skill_box {
				display: flex;
				gap: 20px;
				.box__skill_txt {
					font-size: 20px;
					color: ${colors.gray_33};
				}
				.box__skill_react {
					width: 50%;
					padding: 5% 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 15.5px;
					border: solid 1px ${colors.gray_aa};
					border-radius: 10px;
					svg {
						width: 45px;
					}
				}
				.box__skill_node {
					width: 50%;
					padding: 5% 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 10px;
					border: solid 1px ${colors.gray_aa};
					border-radius: 10px;
					svg {
						width: 45px;
					}
				}
			}
		}
	}
	.btn {
		width: 88%;
		gap: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		.beforebtn {
			color: ${colors.gray_33};
			background-color: ${colors.gray_ee};
			width: 25%;
			height: 50px;
			border-radius: 10px;
			font-size: 20px;
		}
		.nextbtn {
			color: ${colors.white_ff};
			background-color: ${colors.primary};
			width: 25%;
			height: 50px;
			border-radius: 10px;
			font-size: 20px;
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
