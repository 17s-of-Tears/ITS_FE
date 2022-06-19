import styled from 'styled-components'

export const HeaderContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white_ff};
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;

	.header {
		width: 80%;
		max-width: 1364px;
		margin: 10px auto 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	Button {
		@media ${({ theme }) => theme.device.mobileL} {
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`
