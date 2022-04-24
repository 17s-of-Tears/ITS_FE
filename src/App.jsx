import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from 'styles/GlobalStyled'
import RouterConfig from 'router'

const Container = styled.div`
	background-color: #f8f9fd;
`

const App = () => (
	<Container>
		<BrowserRouter>
			<GlobalStyle />
			<Suspense fallback={<span>Loading...</span>}>
				<RouterConfig />
			</Suspense>
		</BrowserRouter>
	</Container>
)

export default App
