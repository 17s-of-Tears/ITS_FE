import styled from 'styled-components'

export const ListWrapper = styled.div`
	width: 80%;
	max-width: 1364px;
	margin: 50px auto;
	display: flex;
	flex-direction: column;
	gap: 50px;

	.cardbox {
		&__title {
			display: flex;
			align-items: center;
			gap: 10px;
			@media ${({ theme }) => theme.device.tabletL} {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
			}
			&-team {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				@media ${({ theme }) => theme.device.tabletL} {
					font-size: ${({ theme }) => theme.fontSizes.xl};
				}
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: ${({ theme }) => theme.fontSizes.lg};
				}
			}
			&-info {
				color: ${({ theme }) => theme.colors.gray_aa};
				font-size: ${({ theme }) => theme.fontSizes.lg};
				@media ${({ theme }) => theme.device.tabletL} {
					font-size: ${({ theme }) => theme.fontSizes.base};
				}
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: ${({ theme }) => theme.fontSizes.small};
				}
			}
		}
	}
`

export const CardGird = styled.div`
	width: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(4, 1fr);

	@media ${({ theme }) => theme.device.NoteBook} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${({ theme }) => theme.device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${({ theme }) => theme.device.mobileL} {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const Divide = styled.hr`
	margin: 50px 0;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
`
