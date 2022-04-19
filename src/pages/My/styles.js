import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	padding: 5% 14.5%;
	color: ${colors.gray_70};
	.my__profile_its {
		font-size: 40px;
		color: ${colors.gray_33};
	}
	.my__profile {
		width: 100%;
		display: flex;
		margin-top: 20px;
		gap: 16px;
		.my__profile_left {
			.my__profile_inform {
				text-align: center;
				width: 398px;
				height: 468px;
				padding: 40px 30px;
				border-radius: 10px;
				border: solid 1px ${colors.gray_dd};
				background-color: ${colors.white_ff};
				.my__profile_txt1 {
					margin-top: 10px;
					font-size: 20px;
					color: ${colors.primary};
				}
				.my__profile_txt2 {
					font-size: 14px;
					color: ${colors.gray_77};
					span {
						color: ${colors.primary};
					}
				}
				.my__profile_imgbtn {
					display: flex;
					justify-content: center;
					margin-top: 10px;
					gap: 10px;
					.my__profile_imgsbtn {
						background-color: ${colors.primary};
						color: ${colors.white_ff};
						width: 101px;
						height: 40px;
						border-radius: 5px;
						&:hover {
							filter: brightness(80%);
						}
					}
					.my__profile_imgdbtn {
						background-color: ${colors.gray_ee};
						color: ${colors.gray_33};
						width: 101px;
						height: 40px;
						border-radius: 5px;
						&:hover {
							filter: brightness(80%);
						}
					}
				}
				.my__profile_nick {
					margin-top: 20px;
					font-size: 20px;
					color: ${colors.gray_33};
				}
				.my__profile_nickbox {
					margin-top: 10px;
					padding-left: 15px;
					font-size: 20px;
					color: ${colors.gray_aa};
					width: 338px;
					height: 50px;
					border-radius: 5px;
					border: solid 1px ${colors.gray_aa};
				}
				.my__profile_nickbtn {
					margin-top: 10px;
					display: flex;
					gap: 10px;
					.my__profile_nickch {
						color: ${colors.white_ff};
						width: 164px;
						height: 40px;
						border-radius: 5px;
						background-color: ${colors.primary};
						&:hover {
							filter: brightness(80%);
						}
					}
					.my__profile_die {
						color: ${colors.white_ff};
						width: 164px;
						height: 40px;
						border-radius: 5px;
						background-color: ${colors.red_74};
						&:hover {
							filter: brightness(80%);
						}
					}
				}
			}
			.menus {
				display: flex;
				flex-direction: column;
				gap: 8px;
				width: 100%;
			}
			.my__profile_team {
				font-size: 20px;
				color: ${colors.gray_77};
				font-weight: 300;
				margin-top: 7px;
				height: 49px;
				padding: 10px 0px 10px 20px;
				border-radius: 5px;
				border: solid 1px ${colors.gray_dd};
				background-color: ${colors.white_ff};
				text-decoration: none;
				&.active {
					border: solid 1px ${colors.primary};
					font-weight: bold;
					color: ${colors.gray_33};
				}
				&:hover {
					font-weight: bold;
					color: ${colors.gray_33};
				}
			}
		}
		.my__profile_right {
			height: 652px;
			width: 80%;
			padding: 30px 30px 240.5px;
			border-radius: 10px;
			border: solid 1px ${colors.gray_dd};
			background-color: ${colors.white_ff};
			hr {
				margin-top: 30px;
				margin-bottom: 30px;
			}
			.my__profile_jointeam {
				display: flex;
				gap: 10px;
				align-items: flex-end;
				.my__profile_teamtxt1 {
					font-size: 30px;
					color: ${colors.gray_33};
				}
				.my__profile_teamtxt2 {
					font-size: 20px;
					color: ${colors.gray_aa};
				}
			}
			.my__profile_project {
				display: flex;
				justify-content: space-between;
				.my__profile_protxt1 {
					font-size: 20px;
					color: ${colors.gray_33};
				}
				.my__profile_protxt2 {
					font-size: 16px;
					color: ${colors.gray_77};
				}
				svg {
					margin-top: 10px;
					width: 45px;
					height: 45px;
				}
				.my__profile_movebtn {
					font-size: 16px;
					color: ${colors.white_ff};
					width: 122px;
					height: 40px;
					border-radius: 5px;
					background-color: ${colors.primary};
					&:hover {
						filter: brightness(80%);
					}
				}
			}
		}
	}
`
