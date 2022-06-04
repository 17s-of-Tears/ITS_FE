import styled from 'styled-components'

export const SignUpModalContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	.signup {
		&__title {
			font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		}

		&__form {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		&__login-btn {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			color: ${({ theme }) => theme.colors.gray_aa};

			&--primary {
				color: ${({ theme }) => theme.colors.primary};
				cursor: pointer;
				transform: 500ms;

				&:hover {
					filter: brightness(70%);
				}
			}
		}
	}
`
