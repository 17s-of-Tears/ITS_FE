import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/MyPage/Home'))
const Board = lazy(() => import('@/pages/MyPage/BoardPage'))
const Liker = lazy(() => import('@/pages/MyPage/LikerPage'))

const MyPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/home', element: <Home /> },
		{ path: '/board', element: <Board /> },
		{ path: '/liker', element: <Liker /> }
	])

	return routes
}

export default MyPageRouterConfig
