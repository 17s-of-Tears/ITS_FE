import styled from 'styled-components'

export const MainContainer = styled.div`
	margin: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	span {
		font-size: 35px;
	}
	.progress {
		background-color: ${({ theme }) => theme.colors.gray_ee};
		width: 45%;
		height: 15px;
		border-radius: 7.5px;
	}
	.box {
		width: 45%;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.colors.white_ff};
		padding: 25px 25px;
		.box_txt1 {
			font-size: 22px;
			margin-right: 5px;
		}
		.box_txt2 {
			font-size: 16px;
			color: ${({ theme }) => theme.colors.gray_aa};
		}
		hr {
			border: solid 0.5px #f1f3f7;
			margin-top: 25px;
		}
		.box__box {
			margin-top: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
			.box__box1 {
				padding: 20px 0px;
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				border: solid 1px #f1f3f7;
				border-radius: 10px;
				&:hover {
					border: solid 2px ${({ theme }) => theme.colors.primary};
				}
			}
			.box__box2 {
				padding: 20px 0px;
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				border: solid 1px #f1f3f7;
				border-radius: 10px;
				&:hover {
					border: solid 2px ${({ theme }) => theme.colors.primary};
				}
			}
			.box__box_txt1 {
				font-size: 14px;
				color: ${({ theme }) => theme.colors.gray_aa};
			}
			.box__box_txt2 {
				font-size: 20px;
				color: ${({ theme }) => theme.colors.gray_33};
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
			color: ${({ theme }) => theme.colors.gray_33};
			background-color: ${({ theme }) => theme.colors.gray_ee};
			width: 25%;
			height: 50px;
			border-radius: 10px;
			font-size: 20px;
		}
		.nextbtn {
			color: ${({ theme }) => theme.colors.white_ff};
			background-color: ${({ theme }) => theme.colors.primary};
			width: 25%;
			height: 50px;
			border-radius: 10px;
			font-size: 20px;
		}
	}
`
export const Progress = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	width: ${props => props.width};
	height: 100%;
	transition: width 0.3s;
	border-radius: 7.5px;
`
