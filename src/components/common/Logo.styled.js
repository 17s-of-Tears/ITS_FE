import styled, { css } from 'styled-components'
import { ReactComponent } from '@/assets/svg/logo.svg'

export const LogoContainer = styled.div`
	cursor: pointer;
	transition: 0.3s;

	${({ noLink }) =>
		noLink &&
		css`
			pointer-events: none;
		`}

	&:hover {
		filter: brightness(70%);
	}

	a {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;

		span {
			font-size: 30px;
			font-weight: 600;
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const LogoIcon = styled(ReactComponent)`
	fill: ${({ theme }) => theme.colors.primary};
`
