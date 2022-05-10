import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const CardContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: ${colors.white_ff};
	border-radius: 5px;
	padding: 10% 0;
	cursor: pointer;
	&:hover {
		box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.16);
	}
	.list_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		font-size: ${theme.fontSizes.base};
		.list__box_category {
			color: ${colors.gray_aa};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.small};
			}
			@media ${theme.device.tablet} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.mobileM} {
				font-size: ${theme.fontSizes.xxsmall};
			}
		}
		.list__box_title {
			font-size: ${theme.fontSizes.lg};
			color: ${colors.gray_33};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.base};
			}
			@media ${theme.device.tablet} {
				font-size: ${theme.fontSizes.small};
			}
			@media ${theme.device.mobileM} {
				font-size: ${theme.fontSizes.xsmall};
			}
		}
		.list__box_date {
			font-size: ${theme.fontSizes.small};
			color: ${colors.gray_aa};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.tablet} {
				font-size: ${theme.fontSizes.xxsmall};
			}
			@media ${theme.device.mobileM} {
				font-size: ${theme.fontSizes.xxxsmall};
			}
		}
		.skill {
			display: flex;
			gap: 10px;
		}
		.skill__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			font-size: ${theme.fontSizes.small};
			color: ${colors.gray_33};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.tablet} {
				font-size: ${theme.fontSizes.xxsmall};
			}
			@media ${theme.device.mobileM} {
				font-size: ${theme.fontSizes.xxxsmall};
			}
		}
		.list__box_like {
			font-size: ${theme.fontSizes.small};
			color: ${colors.gray_aa};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.xsmall};
			}
			@media ${theme.device.tablet} {
				font-size: ${theme.fontSizes.xxsmall};
			}
			@media ${theme.device.mobileM} {
				font-size: ${theme.fontSizes.xxxsmall};
			}
		}
	}
`
