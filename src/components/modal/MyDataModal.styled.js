import styled from 'styled-components'

export const MyDataModalContainer = styled.div`
	width: 80%;
	min-width: 674px;
	padding: 50px 30px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white_ff};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	position: relative;

	> svg {
		position: absolute;
		top: 30px;
		right: 30px;
		fill: ${({ theme }) => theme.colors.gray_aa};
		transition: 500ms;
		cursor: pointer;

		&:hover {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}

	.myprofile {
		&__img {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
			color: ${({ theme }) => theme.colors.primary};
		}
		&__info {
			font-size: ${({ theme }) => theme.fontSizes.lg};
			&-pm {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
		&__nick {
			font-size: ${({ theme }) => theme.fontSizes.xxxl};
		}
		&__btn {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: ${({ theme }) => theme.fontSizes.lg};

			> Button {
				padding: 10px 20px;
				width: 140px;
			}

			&-ee {
				background-color: ${({ theme }) => theme.colors.gray_ee};
				color: ${({ theme }) => theme.colors.gray_33};
			}
			&-red {
				background-color: ${({ theme }) => theme.colors.red_74};
			}
		}
	}
`

export const UserAvatar = styled.img`
	width: 100px;
	height: 100px;
`
