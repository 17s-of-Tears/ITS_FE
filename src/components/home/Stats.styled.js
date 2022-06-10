import styled from 'styled-components'

export const StatsContainer = styled.div`
	width: 80%;
	max-width: 1364px;
	margin: 0 auto 50px;
	display: flex;
	flex-direction: column;
	gap: 100px;

	.stats {
		&__title {
			display: flex;
			flex-direction: column;
			gap: 5px;

			font-size: ${({ theme }) => theme.fontSizes.big};

			&-bold {
				font-weight: 600;
			}

			&-primary {
				font-weight: 600;
				color: ${({ theme }) => theme.colors.primary};
			}
		}

		&__content {
			display: flex;

			@media ${({ theme }) => theme.device.mobileL} {
				display: flex;
				flex-direction: column;
				gap: 50px;
			}

			&-data {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 3px;
				align-items: center;
				justify-content: space-between;

				&-icon {
					width: 100px;
					height: 100px;
					fill: ${({ theme }) => theme.colors.gray_55};
				}

				&-main {
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					color: ${({ theme }) => theme.colors.gray_55};
				}

				&-sub {
					font-size: ${({ theme }) => theme.fontSizes.titleSize};
					font-weight: 700;
					color: ${({ theme }) => theme.colors.gray_55};
				}
				&-small {
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					color: ${({ theme }) => theme.colors.gray_aa};
				}
			}
		}
	}
`
