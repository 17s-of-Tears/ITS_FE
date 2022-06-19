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
			gap: 5px;
			align-items: flex-end;
			padding: 20px;
		}

		&__title {
		}

		&__sub-title {
		}

		&__content {
			padding: 30px 20px;
		}
	}
`
