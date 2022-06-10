import styled from 'styled-components'

export const DescriptionBox = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	border: solid 1px transparent;
	border-radius: 10px;
	.description {
		&__title {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: ${({ theme }) => theme.fontSizes.xxl};
			&-sub {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: ${({ theme }) => theme.colors.gray_aa};
			}
		}

		&__content {
			width: 100%;
			height: 150px;
			border: solid 1px ${({ theme }) => theme.colors.gray_aa};
			border-radius: 5px;
			padding: 13px 0 0 13px;
			font-size: ${({ theme }) => theme.fontSizes.lg};
		}
	}
`
