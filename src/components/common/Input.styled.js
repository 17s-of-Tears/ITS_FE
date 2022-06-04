import styled from 'styled-components'

export const InputContainer = styled.div`
	width: 100%;

	.input-wrapper {
		> input {
			width: 100%;
			border: 1px solid ${({ theme }) => theme.colors.gray_aa};
			border-radius: 5px;
			padding: 12px;
			font-size: ${({ theme }) => theme.fontSizes.base};
		}
	}
`
