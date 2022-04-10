import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from 'components/common/Header'
import GlobalStyle from 'styles/GlobalStyled'
import RouterConfig from 'router'
import styled from 'styled-components'
import Footer from 'components/common/footer'

const Container = styled.div`
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
			<Footer />
		</BrowserRouter>
	</Container>
)

export default App
