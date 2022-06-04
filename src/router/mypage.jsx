import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/My/Home'))
const Board = lazy(() => import('@/pages/My/Board'))
const Liker = lazy(() => import('@/pages/My/Liker'))

const MyPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/home', element: <Home /> },
		{ path: '/board', element: <Board /> },
		{ path: '/liker', element: <Liker /> }
	])

	return routes
}

export default MyPageRouterConfig
