import styled from 'styled-components'
import colors from 'styles/colors'

export const CardContainer = styled.div`
	border: 1px solid black;
	width: 100%;
	position: relative;
	background-color: white;
	border: 1px solid ${colors.gray_ea};
	border-radius: 5px;
	&::after {
		display: block;
		content: '';
		padding-bottom: 100%;
	}
	&:hover {
		box-shadow: 3px 3px 10px 5px rgba(119, 119, 119, 0.16);
	}
	.list__join_pro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		width: 100%;
		height: 100%;
		position: absolute;
		cursor: pointer;
		.list__join_box {
			padding: 30px 0;
			width: 100%;

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
