import styled from 'styled-components'

export const AuthModalContainer = styled.div`
	width: 80%;
	min-width: 674px;
	padding: 50px 30px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	position: relative;

	> svg {
		position: absolute;
		top: 30px;
		right: 30px;
		fill: ${({ theme }) => theme.colors.gray_aa};
		transition: 500ms;
		cursor: pointer;

		&:hover {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`
