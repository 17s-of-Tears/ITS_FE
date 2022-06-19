import styled from 'styled-components'

export const HostCardContainer = styled.div`
	width: 100%;
	background-color: white;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	border-radius: 10px;

	> hr {
		border: 1px solid ${({ theme }) => theme.colors.lineColor};
	}

	.host-card {
		&__header {
			display: flex;
			gap: 10px;
			align-items: flex-end;
			padding: 25px 20px 15px;
		}

		&__title {
			font-size: ${({ theme }) => theme.fontSizes.xxl};
		}

		&__sub-title {
			font-size: ${({ theme }) => theme.fontSizes.base};
			color: ${({ theme }) => theme.colors.gray_aa};
		}

		&__content {
			padding: 30px 20px;
		}
	}
`
