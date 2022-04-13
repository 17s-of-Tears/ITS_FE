import styled from 'styled-components'
import colors from 'styles/colors'

export const CardContainer = styled.div`
	.list__join_pro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		.list__join_box {
			margin-top: 20px;
			width: 326px;
			height: 290px;
			background-color: white;
			border: 1px solid ${colors.gray_ea};
			border-radius: 5px;
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
			.list__skills {
				display: flex;
				gap: 20px;
				align-items: flex-start;
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
