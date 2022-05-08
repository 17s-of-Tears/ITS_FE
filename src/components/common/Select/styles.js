import styled from 'styled-components'
import theme from 'styles/fonts'

export const SelectContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.select__left {
		width: 22%;
		display: flex;
		gap: 10px;
		.select__kind {
			width: 100%;
			padding: 4%;
			font-size: ${theme.fontSizes.small};
			@media ${theme.device.tabletL} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.mobileL} {
				font-size: ${theme.fontSizes.xxsmall};
			}
		}
		.select__lang {
			width: 100%;
			padding: 4%;
			font-size: ${theme.fontSizes.small};
			@media ${theme.device.tabletL} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.mobileL} {
				font-size: ${theme.fontSizes.xxsmall};
			}
		}
	}
	.select__right {
		width: 7%;
		.select__line {
			width: 100%;
			height: auto;
			padding: 11%;
			font-size: ${theme.fontSizes.small};
			@media ${theme.device.tabletL} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.mobileL} {
				font-size: ${theme.fontSizes.xxsmall};
			}
		}
	}
`
