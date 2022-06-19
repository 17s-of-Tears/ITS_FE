import styled from 'styled-components'

export const SkillContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 30px 50px 30px;
	border: solid 1px transparent;
	border-radius: 10px;
	position: relative;

	.skill {
		&__title {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: ${({ theme }) => theme.fontSizes.xxl};

			&-sub {
				font-size: ${({ theme }) => theme.fontSizes.base};
				color: ${({ theme }) => theme.colors.gray_aa};
			}
		}

		&__move {
			position: absolute;
			right: 30px;
			bottom: 10px;
			&-btn {
				background-color: transparent;
				font-size: ${({ theme }) => theme.fontSizes.base};
			}
		}

		&__content {
			width: 100%;
			display: flex;
			gap: 20px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}
`
