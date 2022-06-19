import styled from 'styled-components'

export const DetailCommentContainer = styled.div`
	.detailcomment {
		display: flex;
		flex-direction: column;
		gap: 20px;
		&__info {
			font-size: ${({ theme }) => theme.fontSizes.base};
		}

		&__box {
			padding: 20px 0 0 20px;
			height: 100px;
			background-color: transparent;
			border: solid 1px ${({ theme }) => theme.colors.gray_ea};
			border-radius: 10px;
		}

		&-btn {
			display: flex;
			justify-content: flex-end;

			Button {
				width: 20%;
				font-size: 16px;
			}
		}
	}
`
