import styled from 'styled-components'

export const DetailTitleContainer = styled.div`
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
