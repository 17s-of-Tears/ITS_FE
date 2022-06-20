import styled from 'styled-components'

export const DetailContainer = styled.div`
	margin: 100px auto;
	width: 80%;
	max-width: 1364px;
	display: flex;
	justify-content: space-between;

	hr {
		width: 100%;
		border: solid 0.5px ${({ theme }) => theme.colors.gray_ea};
	}

	.back {
		padding: 5px;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid 1px ${({ theme }) => theme.colors.gray_ea};
		border-radius: 5px;
		cursor: pointer;
		> svg {
			width: 20px;
			height: 20px;
		}
	}

	.listdetail {
		&__left {
			width: 55%;
			display: flex;
			flex-direction: column;
			gap: 30px;
			@media ${({ theme }) => theme.device.tabletL} {
				width: 70%;
			}
			@media ${({ theme }) => theme.device.tablet} {
				width: 100%;
			}

			.comment-list {
				width: 100%;
				height: auto;

				&-element {
					border: solid 1px ${({ theme }) => theme.colors.gray_ea};
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					padding: 20px;
					gap: 10px;
					margin-bottom: 20px;
					background-color: ${({ theme }) => theme.colors.white_ff};
					&-user {
						display: flex;
						align-items: center;
						gap: 10px;
					}
				}
			}
		}

		&__right {
			width: 25%;
			height: 377px;
		}
	}
`

export const DetailTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	.detailtitle {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}
			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
			}
		}

		&__author {
			font-size: ${({ theme }) => theme.fontSizes.lg};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.base};
			}
			&-date {
				color: ${({ theme }) => theme.colors.gray_aa};
			}
		}

		&__icon {
			display: flex;
			gap: 10px;
			> svg {
				width: 30px;
				height: 30px;
				@media ${({ theme }) => theme.device.NoteBook} {
					width: 25px;
					height: 25px;
				}
			}
		}
	}
`

export const DetailContent = styled.div`
	.detailcontent {
		&__content {
			font-size: ${({ theme }) => theme.fontSizes.base};
		}
	}
`
