import styled from 'styled-components'

export const SkillBox = styled.div`
	.skillbox {
		&__content {
			padding: 15px 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 20px;
			border: solid 1px ${({ theme }) => theme.colors.lineColor};
			border-radius: 10px;
			cursor: pointer;

			&-icon {
				width: 30px;
				height: 30px;
			}

			&-info {
				font-size: ${({ theme }) => theme.fontSizes.lg};
			}
		}
	}
`
