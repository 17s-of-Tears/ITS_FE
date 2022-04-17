import styled from 'styled-components'
import colors from 'styles/colors'

export const Maincontainer = styled.div`
	padding: 50px 278px 0px 278px;
	width: 100%;
	.team__profile {
		padding-bottom: 30px;
		display: flex;
		gap: 30px;
		border-bottom: solid 1px ${colors.gray_ea};
		.net {
			width: 150px;
			height: 150px;
			border-radius: 10px;
		}
		.team__profile_name {
			font-size: 40px;
			color: ${colors.gray_33};
		}
		.team__profile_intro {
			font-size: 20px;
			color: ${colors.gray_77};
		}
		svg {
			width: 45px;
			height: 45px;
			margin-top: 25px;
		}
	}
	.team__play {
		display: flex;
		margin-top: 30px;
		gap: 16px;
		width: 100%;
		.menus {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 20%;
		}
		.team__menu {
			font-size: 20px;
			color: ${colors.gray_77};
			font-weight: 300;
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
	.contents {
		display: flex;
		flex-direction: column;
		gap: 28px;
		width: 80%;
		.team__contents_title {
			padding: 15px 30px 0px 30px;
			font-size: 20px;
			color: ${colors.gray_33};
		}
		.team__contents {
			display: flex;
			gap: 16px;
			hr {
				border: solid 1px #f8f9fd;
			}
			.team__contents_notice {
				width: 50%;
				height: 379px;
				border-radius: 5px;
				background-color: ${colors.white_ff};
				.notice_txt {
					font-size: 16px;
					color: ${colors.gray_77};
					padding: 11px 30px 11px 30px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.notice__txt1 {
						cursor: pointer;
					}
				}
				.notice__num {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 16px;
					color: ${colors.gray_77};
					gap: 10px;
					p {
						cursor: pointer;
					}
				}
			}
			.team__contents_list {
				width: 50%;
				height: 379px;
				border-radius: 5px;
				background-color: ${colors.white_ff};
				.team__members {
					padding: 20px 15px 0px 15px;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 20px;
					.team__members_user {
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 15px;
						cursor: pointer;
						img {
							width: 40px;
							height: 40px;
						}
					}
				}
			}
		}
		.team__contents_date {
			width: 100%;
			height: 300px;
			border-radius: 5px;
			background-color: ${colors.white_ff};
		}
	}
`
