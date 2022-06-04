import styled from 'styled-components'

export const CardContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border-radius: 5px;
	padding: 10% 0;
	cursor: pointer;

	&:hover {
		box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.16);
	}

	.list-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		font-size: ${({ theme }) => theme.fontSizes.base};

		&__category {
			color: ${({ theme }) => theme.colors.gray_aa};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.tablet} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileM} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__title {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			color: ${({ theme }) => theme.colors.gray_33};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.base};
			}

			@media ${({ theme }) => theme.device.tablet} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileM} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__date {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.gray_aa};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.tablet} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileM} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__skill-group {
			display: flex;
			gap: 10px;
		}

		&__skill__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.gray_33};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.xsmall};
			}

			@media ${({ theme }) => theme.device.tablet} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileM} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__liker {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.gray_aa};

			@media ${({ theme }) => theme.device.NoteBook} {
				font-size: ${({ theme }) => theme.fontSizes.xsmall};
			}

			@media ${({ theme }) => theme.device.tablet} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileM} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}
	}
`
