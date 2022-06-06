import styled, { css } from 'styled-components'
import Button from '../common/Button'

export const SelectBoxContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bgColor};
	border-radius: 10px;
	border: 1px solid transparent;
	display: flex;
	flex-direction: column;
	padding: 130px 40px;
	gap: 20px;
	align-items: center;
	cursor: pointer;

	${({ selectedBox, theme }) =>
		selectedBox &&
		css`
			border: 1px solid ${theme.colors.primary};
		`}
`

export const SelectTextGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;

	> h2 {
		font-weight: 500;
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
	}
`

export const SelectButton = styled(Button)`
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: transparent;

	${({ selectedBox, theme }) =>
		selectedBox &&
		css`
			color: ${theme.colors.white_ff};
			background-color: ${theme.colors.primary};
		`}
`
