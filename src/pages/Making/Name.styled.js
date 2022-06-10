import styled from 'styled-components'

export const NameBox = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	border: solid 1px transparent;
	border-radius: 10px;
	.name {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.xxl};
		}

		&__content {
			width: 100%;
			border: solid 1px ${({ theme }) => theme.colors.gray_aa};
			border-radius: 5px;
			padding: 13px 0 13px 13px;
			font-size: ${({ theme }) => theme.fontSizes.lg};
		}
	}
`
