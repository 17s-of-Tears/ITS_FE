import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent } from 'assets/svg/logo.svg'

import colors from 'styles/colors'

// const Container = styled.div`
// 	font-size: 30px;
// 	font-weight: 600;
// 	transition: 0.3s;
// 	cursor: pointer;
// 	a {
// 		text-decoration: none;
// 		color: ${colors.primary};
// 		display: flex;
// 		gap: 10px;
// 		align-items: center;
// 	}
// 	&:hover {
// 		filter: brightness(80%);
// 	}
// `
// const StyledItsLogo = styled(ItsLogo)`
// 	position: absolute;
// 	left: 0;
// 	fill: ${colors.primary};
// `

// const Logo = () => (
// 	<Container>
// 		<Link to="/">
// 			<StyledItsLogo width="35" height="35" />
// 			<span>It's</span>
// 		</Link>
// 	</Container>
// )

// export default Logo

const Container = styled.div`
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		filter: brightness(70%);
	}
	a {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		span {
			font-size: 30px;
			font-weight: 600;
			color: ${colors.primary};
		}
	}
`

const LogoIcon = styled(ReactComponent)`
	fill: ${colors.primary};
`

const Logo = () => (
	<Container>
		<Link to="/">
			<LogoIcon width="35" height="35" />
			<span>It&apos;s</span>
		</Link>
	</Container>
)

export default Logo
