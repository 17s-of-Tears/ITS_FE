import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const MainContainer = styled.div`
	hr {
		display: flex;
	}
	.list__top {
		margin-top: 50px;
		padding: 0 14.5%;
		font-size: ${theme.fontSizes.titleSize};
		font-weight: 500;
		.list__top_filter {
			font-size: ${theme.fontSizes.big};
			font-weight: 400;
			color: ${colors.gray_aa};
		}
	}
	.list__select {
		margin-top: 20px;
		padding: 0 14.5%;
		display: flex;
		justify-content: space-between;
	}
	hr {
		margin-top: 50px;
		border: solid 1px ${colors.gray_dd};
	}
	.list__card_info {
		margin-top: 50px;
		padding: 0 14.5%;
		display: flex;
		align-items: flex-end;
		gap: 10px;
		.list__info_total {
			font-size: ${theme.fontSizes.big};
			color: ${colors.gray_33};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.xxxl};
			}
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.xxl};
			}
		}
		.list__info_join {
			font-size: ${theme.fontSizes.lg};
			color: ${colors.gray_aa};
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.base};
			}
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.small};
			}
		}
	}
	.list__card_box {
		margin-top: 80px;
		padding: 0 14.5%;
		gap: 25px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@media ${theme.device.NoteBook} {
			grid-template-columns: repeat(3, 1fr);
		}
		@media ${theme.device.tabletL} {
			grid-template-columns: repeat(2, 1fr);
		}
		@media ${theme.device.mobileL} {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`
