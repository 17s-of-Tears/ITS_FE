import styled from 'styled-components'

export const ListFilterContainer = styled.div`
	width: 80%;
	max-width: 1364px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;

	.filter-top {
		margin-top: 50px;

		&__title {
			display: flex;
			align-items: flex-end;
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
			font-weight: 500;
			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.big};
			}
			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
			}

			&--sub {
				color: ${({ theme }) => theme.colors.gray_70};
				font-size: ${({ theme }) => theme.fontSizes.xxxl};
				font-weight: 400;
				@media ${({ theme }) => theme.device.mobileL} {
					font-size: ${({ theme }) => theme.fontSizes.xxl};
				}
			}
		}
	}

	.filter-group {
		display: flex;
		justify-content: space-between;
		@media ${({ theme }) => theme.device.mobileL} {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		&--left {
			display: flex;
			gap: 10px;

			> * {
				width: 150px;
			}

			@media ${({ theme }) => theme.device.mobileL} {
				display: flex;
				flex-direction: column;
			}
		}

		&--right {
			> * {
				width: 150px;
			}
		}
	}
`
