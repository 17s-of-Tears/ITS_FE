import styled from 'styled-components'

export const MainContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0px;
	gap: 30px;
	width: 50%;
	min-width: 812px;

	.making_title {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 500;
	}

	.progress {
		width: 100%;
		background-color: ${({ theme }) => theme.colors.gray_ee};
		height: 15px;
		border-radius: 7.5px;
	}

	hr {
		border: solid 0.5px #f1f3f7;
		margin: 25px 0px;
	}
`

export const Progress = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	width: ${props => props.width};
	height: 100%;
	transition: width 0.3s;
	border-radius: 7.5px;
`

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	> button {
		width: 50%;
		height: 50px;
		border-radius: 10px;
		font-size: 20px;
		transition: 0.3s;
		&:hover {
			filter: brightness(80%);
		}
	}
	.beforebtn {
		color: ${({ theme }) => theme.colors.gray_33};
		background-color: ${({ theme }) => theme.colors.gray_ee};
	}
	.nextbtn {
		color: ${({ theme }) => theme.colors.white_ff};
		background-color: ${({ theme }) => theme.colors.primary};
	}
`
