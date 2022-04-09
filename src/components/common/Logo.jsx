import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from 'styles/colors'

const Container = styled.div`
	font-size: 25px;
	font-weight: 600;
	transition: 0.3s;
	cursor: pointer;
	a {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: ${colors.primary};
	}
	&:hover {
		filter: brightness(80%);
	}
`

const ImgWrapper = styled.img`
	width: 34px;
	height: 20px;
`

const Logo = () => (
	<Container>
		<Link to="/">
			<ImgWrapper src="images/logo.png" alt="logo" />
			It's
		</Link>
	</Container>
)

export default Logo
