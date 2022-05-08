import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import theme from 'styles/fonts'

const Container = styled.div`
	display: flex;
	font-size: ${theme.fontSizes.subTitleSize};
	font-weight: 600;
	color: ${colors.primary};
`

const Its = () => <Container>It's</Container>

export default Its
