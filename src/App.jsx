import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import LoadingSpinner from '@/components/common/LoadingSpinner'
import RouterConfig from '@/RouterConfig'
import GlobalStyle from '@/styles/GlobalStyled'
import theme from '@/styles/theme'
import { loadMyInfoRequest } from '@/store/user/user.actions'
import { getCookie } from '@/utils/cookie'

const App = () => {
	const dispatch = useDispatch()
	const auth = getCookie('auth')

	useEffect(() => {
		auth && dispatch(loadMyInfoRequest())
	}, [auth, dispatch])

	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Suspense fallback={<LoadingSpinner primary />}>
						<RouterConfig />
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
			<ToastContainer />
		</>
	)
}

export default App
