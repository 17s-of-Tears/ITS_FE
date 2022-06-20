import styled from 'styled-components'

export const HeaderContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	height: 65px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;

	.header {
		width: 80%;
		max-width: 1364px;
		margin: 10px auto 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const HeaderMenu = styled.div`
	display: flex;
	gap: 12px;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.gray_33};
		transition: all 250ms ease;

		&.active {
			color: ${({ theme }) => theme.colors.primary};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`
