import styled, { css } from 'styled-components'

export const PurposeBoxContainer = styled.div`
	width: 100%;
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #f1f3f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px 0;
	cursor: pointer;

	${({ selectedBox, theme }) =>
		selectedBox &&
		css`
			border: 1px solid ${theme.colors.primary};
		`}
`

export const PurposeTextGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSizes.xl};

	.purpose__text-info {
		color: ${({ theme }) => theme.colors.gray_aa};
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
`
