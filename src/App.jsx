import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from 'components/common/Header'
import GlobalStyle from 'styles/GlobalStyled'
import RouterConfig from 'router'
import styled from 'styled-components'

const Container = styled.div`
	height: 500vh;
	background-color: #f8f9fd;
`

const App = () => (
	<Container>
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Suspense fallback={<span>Loading...</span>}>
				<RouterConfig />
			</Suspense>
		</BrowserRouter>
	</Container>
)

export default App
