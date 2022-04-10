import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ItsLogo } from 'assets/svg/logo.svg'

import colors from 'styles/colors'

const Container = styled.div`
	font-size: 25px;
	font-weight: 600;
	transition: 0.3s;
	cursor: pointer;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${colors.primary};
	}
	&:hover {
		filter: brightness(80%);
	}
`
const StyledItsLogo = styled(ItsLogo)`
	width: 100px;
	height: 100px;
`

const Logo = () => (
	<Container>
		<Link to="/">
			<StyledItsLogo />
			It's
		</Link>
	</Container>
)

export default Logo
