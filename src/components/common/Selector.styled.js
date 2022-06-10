import styled from 'styled-components'

export const StyledSelector = styled.div`
	width: 100%;
	height: 40px;
	position: relative;

	select {
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: 1px solid ${({ theme }) => theme.colors.gray_aa};
		padding: 0 15px;
		border-radius: 5px;
		outline: none;
		color: ${({ theme }) => theme.colors.gray_55};
		font-weight: 600;
		-webkit-appearance: none; /* 크롬 화살표 없애기 */
		-moz-appearance: none; /* 파이어폭스 화살표 없애기 */
		appearance: none; /* 화살표 없애기 */
		transition: 500ms;

		&:focus {
			border-color: ${({ theme }) => theme.colors.primary};
		}
	}

	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
	}
`
