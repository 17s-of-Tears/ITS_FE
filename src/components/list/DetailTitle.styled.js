import styled from 'styled-components'

export const DetailTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	.detailtitle {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		}

		&__author {
			font-size: ${({ theme }) => theme.fontSizes.lg};

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
			}
		}
	}
`
