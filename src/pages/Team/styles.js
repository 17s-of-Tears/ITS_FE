import styled from 'styled-components'

export const Maincontainer = styled.div`
	padding: 5% 14.5%;
	width: 100%;
	.team__profile {
		padding-bottom: 30px;
		display: flex;
		gap: 30px;
		border-bottom: solid 1px ${({ theme }) => theme.colors.gray_ea};
		.net {
			width: 150px;
			height: 150px;
			border-radius: 10px;
		}
		.team__profile_name {
			font-size: 40px;
			color: ${({ theme }) => theme.colors.gray_33};
		}
		.team__profile_intro {
			font-size: 20px;
			color: ${({ theme }) => theme.colors.gray_77};
		}
		svg {
			width: 45px;
			height: 45px;
			margin-top: 25px;
		}
		img {
			cursor: pointer;
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
			color: ${({ theme }) => theme.colors.gray_77};
			font-weight: 300;
			height: 49px;
			padding: 10px 0px 10px 20px;
			border-radius: 5px;
			border: solid 1px ${({ theme }) => theme.colors.gray_dd};
			background-color: ${({ theme }) => theme.colors.white_ff};
			text-decoration: none;
			&.active {
				border: solid 1px ${({ theme }) => theme.colors.primary};
				font-weight: bold;
				color: ${({ theme }) => theme.colors.gray_33};
			}
			&:hover {
				font-weight: bold;
				color: ${({ theme }) => theme.colors.gray_33};
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
			color: ${({ theme }) => theme.colors.gray_33};
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
				background-color: ${({ theme }) => theme.colors.white_ff};
				.notice_txt {
					font-size: 16px;
					color: ${({ theme }) => theme.colors.gray_77};
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
					color: ${({ theme }) => theme.colors.gray_77};
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
				background-color: ${({ theme }) => theme.colors.white_ff};
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
			background-color: ${({ theme }) => theme.colors.white_ff};
		}
	}

	.memo__box {
		display: flex;
		gap: 30px;
		width: 100%;
		height: 707px;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.white_ff};
		padding: 30px 50px;
		.memo__contents {
			width: 25%;
			height: 650px;
			background-color: ${({ theme }) => theme.colors.gray_eb};
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 20px;
			gap: 20px;
			.memo__contents_box {
				font-size: 18px;
				color: ${({ theme }) => theme.colors.gray_33};
				width: 90%;
				height: 9%;
				border-radius: 10px;
				background-color: ${({ theme }) => theme.colors.white_ff};
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-left: 10px;
				svg {
					width: 25%;
					height: 25%;
					cursor: pointer;
				}
			}
			.memo__add_btn {
				margin-top: 94%;
				background-color: ${({ theme }) => theme.colors.primary};
				font-size: 18px;
				color: ${({ theme }) => theme.colors.white_ff};
				width: 90%;
				height: 9%;
				border-radius: 10px;
			}
		}
	}

	.chat_box {
		display: flex;
		gap: 30px;
		width: 100%;
		height: 707px;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.white_ff};
		font-size: 48px;
		align-items: center;
		justify-content: center;
	}
`
