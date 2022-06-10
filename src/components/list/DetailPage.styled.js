import styled from 'styled-components'

export const ListDetailContainer = styled.div`
	margin: 100px auto;
	width: 80%;
	max-width: 1364px;
	display: flex;
	justify-content: space-between;

	hr {
		width: 100%;
		border: solid 0.5px ${({ theme }) => theme.colors.gray_ea};
	}

	.back {
		padding: 5px;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid 1px ${({ theme }) => theme.colors.gray_ea};
		border-radius: 5px;
		cursor: pointer;
		> svg {
			width: 20px;
			height: 20px;
		}
	}

	.listdetail {
		&__left {
			width: 55%;
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		&__right {
			width: 25%;
			height: 377px;
		}
	}
`
