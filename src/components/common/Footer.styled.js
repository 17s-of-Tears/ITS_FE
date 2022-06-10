import styled from 'styled-components'

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border-radius: 10px 10px 0 0;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	.footer {
		&-text {
			width: 80%;
			max-width: 1640px;
			height: 80px;
			margin: 0 auto;
			font-size: 16px;
			color: ${({ theme }) => theme.colors.gray_70};
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`
