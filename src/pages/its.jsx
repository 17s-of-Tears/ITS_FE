import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

const Container = styled.div`
	display: flex;
	font-size: 42px;
	font-weight: 600;
	color: ${colors.primary};
`

const Its = () => (
	<Container>	
			It's
	</Container>
)

export default Its
