import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	margin: 50px auto;
	background-color: ${colors.gray_ee};
	width: 50%;
	height: 15px;
	display: flex;
	align-items: center;
	border-radius: 7.5px;
`
export const Progress = styled.div`
	background-color: ${colors.primary};
	width: ${props => props.width};
	height: 100%;
	transition: width 0.5s;
	border-radius: 7.5px;
`
