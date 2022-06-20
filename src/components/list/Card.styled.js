import styled from 'styled-components'

export const CardWrapper = styled.div`
	padding: 30px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	transition: all 250ms ease;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.gray_55};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.bgColor};
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}
`

export const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`

export const CardCategory = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.gray_aa};
`

export const CardTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	color: ${({ theme }) => theme.colors.gray_33};
	font-weight: 500;
`

export const CardDate = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.gray_aa};
`

export const CardGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

export const CardItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;
	align-items: center;
`

export const CardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	> span {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.gray_55};
	}
`
