import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	hr {
		display: flex;
	}
	.list__top {
		margin-top: 50px;
		padding: 0 14.5%;
		font-size: 45px;
		font-weight: 500;
		.list__top_filter {
			font-size: 30px;
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
			font-size: 24px;
			color: ${colors.gray_33};
		}
		.list__info_join {
			font-size: 16px;
			color: ${colors.gray_aa};
		}
	}
	.list__card_box {
		margin-top: 80px;
		padding: 0 14.5%;
		gap: 25px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		@media screen and (max-width: 1920px) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media screen and (max-width: 1440px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`
