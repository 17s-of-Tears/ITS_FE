import styled, { css } from 'styled-components'

export const SkillCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;
`

export const SkillList = styled.div`
	padding: 10px;
	display: flex;
	gap: 10px;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		color: ${({ theme }) => theme.colors.gray_77};
	}
`

export const SkillGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`

export const SkillItem = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.gray_ee};
	border-radius: 5px;
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: all 250ms ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.bgColor};
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}

	${({ active }) =>
		active &&
		css`
			background-color: ${({ theme }) => theme.colors.bgColor};
			border: 1px solid ${({ theme }) => theme.colors.primary};
		`}
`

export const SkillName = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSizes.xl};
`
