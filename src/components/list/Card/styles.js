import styled from 'styled-components'
import colors from 'styles/colors'

export const CardContainer = styled.div`
	.list__join_pro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		.list__join_box {
			padding:30px 0;
			width: 326px;
			height: 290px;
			background-color: white;
			border: 1px solid ${colors.gray_ea};
			border-radius: 5px;
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
			.list__category {
				font-size: 16px;
				color: ${colors.gray_aa};
			}
			.list__title {
				font-size: 20px;
				margin-top: 5px;
				color: ${colors.gray_33};
			}
			.list__date {
				font-size: 14px;
				margin-top: 10px;
				color: ${colors.gray_aa};
			}
			.list__comment {
				font-size: 14px;
				margin-top: 27px;
				color: ${colors.gray_aa};
			}
			.list__skills {
				margin-top: 20px;
				display: flex;
				gap: 25px;
				align-items: center;
				justify-content: center;
				.skill_box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 10px;
				}
			}
		}
	}
`
