import styled from 'styled-components'

export const TextAreaContainer = styled.div`
	width: 100%;

	> textarea {
		font-family: 'Noto Sans';
		width: 100%;
		height: 150px;
		border: 1px solid ${({ theme }) => theme.colors.gray_aa};
		border-radius: 5px;
		padding: 12px;
		font-size: ${({ theme }) => theme.fontSizes.lg};
		color: ${({ theme }) => theme.colors.gray_33};
	}
`
