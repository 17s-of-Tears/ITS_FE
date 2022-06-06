import styled from 'styled-components'

export const FooterContainer = styled.footer`
	width: 80%;
	max-width: 1640px;
	height: 80px;
	margin: 0 auto;
	border-radius: 10px 10px 0 0;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	font-size: 16px;
	color: ${({ theme }) => theme.colors.gray_70};
	text-align: center;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`
