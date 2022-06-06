import styled from 'styled-components'

export const ServiceModalContainer = styled.div`
	width: 1088px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	border-radius: 10px;
	padding: 60px 130px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	position: relative;

	> svg {
		position: absolute;
		top: 50px;
		right: 50px;
		fill: ${({ theme }) => theme.colors.gray_aa};
		transition: 500ms;
		cursor: pointer;

		&:hover {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}

	.modal {
		&__header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}

		&__title {
			margin-top: 10px;
			font-weight: 500;
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		}

		&__description {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			color: ${({ theme }) => theme.colors.gray_77};
		}

		&__content {
			display: flex;
			gap: 30px;
		}
	}
`
