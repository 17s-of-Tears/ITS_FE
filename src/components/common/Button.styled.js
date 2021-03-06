import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
	border: 0;
	border-radius: 4px;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
	color: ${({ color }) => color};
	font-size: ${({ theme }) => theme.fontSizes.lg};
	outline: none;
	transition: 400ms;
	cursor: pointer;
	position: relative;

	@media ${({ theme }) => theme.device.mobileL} {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}

	.loading {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
	}

	${({ px, py }) => {
		const padding = { padding: '8px 12px' }
		if (px && !py) padding.padding = `8px ${px}px`
		else if (py && !px) padding.padding = `${py}px 8px`
		else if (px && py) padding.padding = `${py}px ${px}px`
		return css`
			${padding};
		`
	}}

	${({ fullSize }) =>
		fullSize &&
		css`
			width: 100%;
		`}

	&:hover {
		filter: brightness(80%);
	}

	:disabled {
		filter: grayscale(50%);
	}
`
