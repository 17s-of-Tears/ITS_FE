import styled from 'styled-components'

export const SelectBoxContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.select-left {
		width: 22%;
		display: flex;
		gap: 10px;

		&__kind {
			width: 100%;
			padding: 4%;
			font-size: ${({ theme }) => theme.fontSizes.small};

			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__lang {
			width: 100%;
			padding: 4%;
			font-size: ${({ theme }) => theme.fontSizes.small};

			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}
	}

	.select__right {
		width: 7%;

		&__line {
			width: 100%;
			height: auto;
			padding: 11%;
			font-size: ${({ theme }) => theme.fontSizes.small};

			@media ${({ theme }) => theme.device.tabletL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}

			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}
	}
`
