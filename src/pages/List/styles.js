import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	.list__filter {
		border-bottom: 1px solid ${colors.gray_ea};
		padding: 50px 278px 50px 278px;
		.list__filter_txt {
			display: flex;
			font-size: 42px;
			font-weight: 500;
			gap: 10px;
			span {
				font-size: 24px;
				color: ${colors.gray_aa};
			}
		}
	}
	.list__join_txt {
		padding: 50px 278px 0px 278px;
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		gap: 7px;
		.list__join_stxt {
			font-size: 14px;
			color: ${colors.gray_aa};
		}
	}
	.list__card {
		padding: 0px 278px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 25px;
		margin-top: 80px;
		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`
