import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RouterConfig from 'router'
import GlobalStyle from 'styles/GlobalStyled'
import theme from 'styles/theme'

const App = () => (
	<>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Suspense fallback={<span>Loading...</span>}>
					<RouterConfig />
				</Suspense>
			</ThemeProvider>
			<ToastContainer />
		</BrowserRouter>
	</>
)

export default App
