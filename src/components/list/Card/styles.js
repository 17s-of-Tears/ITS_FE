import styled from 'styled-components'
import colors from 'styles/colors'

export const CardContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: ${colors.white_ff};
	border-radius: 5px;
	padding: 10%;
	cursor: pointer;
	&:hover {
		box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.16);
	}
	.list_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		.list__box_category {
			font-size: 12px;
			color: ${colors.gray_aa};
		}
		.list__box_title {
			font-size: 16px;
			color: ${colors.gray_33};
		}
		.list__box_date {
			font-size: 12px;
			color: ${colors.gray_aa};
		}
		.skill {
			display: flex;
			gap: 10px;
		}
		.skill__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 12px;
			color: ${colors.gray_33};
		}
		.list__box_like {
			font-size: 12px;
			color: ${colors.gray_aa};
		}
	}
`
