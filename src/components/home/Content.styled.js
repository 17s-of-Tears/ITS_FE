import theme from '@/styles/theme'
import styled from 'styled-components'

export const ContentContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	margin: 150px 0;
	padding: 100px 0;
	display: flex;
	flex-direction: column;
	gap: 100px;
	.content {
		&__top {
			width: 80%;
			max-width: 1364px;
			margin: 0px auto;
			display: flex;
			justify-content: space-between;
			@media ${({ theme }) => theme.device.mobileL} {
				display: flex;
				flex-direction: column;
				gap: 50px;
			}
		}
		&__bottom {
			width: 80%;
			max-width: 1364px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			@media ${({ theme }) => theme.device.mobileL} {
				display: flex;
				flex-direction: column-reverse;
				gap: 50px;
			}
		}

		&__title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: ${({ theme }) => theme.fontSizes.xxxl};

			@media ${({ theme }) => theme.device.mobileL} {
				font-size: ${({ theme }) => theme.fontSizes.xxl};
			}

			&-primary {
				color: ${({ theme }) => theme.colors.primary};
				font-weight: 600;
			}
		}

		&__img {
			> img {
				width: 240px;
			}
		}
	}
`
