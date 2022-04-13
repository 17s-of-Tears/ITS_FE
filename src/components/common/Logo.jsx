import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ItsLogo } from 'assets/svg/logo.svg'

import colors from 'styles/colors'

const Container = styled.div`
	font-size: 30px;
	font-weight: 600;
	transition: 0.3s;
	position: relative;
	cursor: pointer;
	.logo_test {
		position: absolute;
		left: 80px;
	}
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
	position: absolute;
	left: 0;
	width: 100px;
	height: 100px;
`

const Logo = () => (
	<Container>
		<Link to="/">
			<StyledItsLogo />
			<div className="logo_test">It's</div>
		</Link>
	</Container>
)

export default Logo
