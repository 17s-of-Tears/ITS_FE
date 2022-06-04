import styled from 'styled-components'

export const HeaderContainer = styled.div`
	height: 80px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 14.5%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;
	background-color: white;
`
