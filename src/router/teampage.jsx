import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Team/Home'))
const Memo = lazy(() => import('@/pages/Team/Memo'))
const Chat = lazy(() => import('@/pages/Team/Chat'))

const TeamPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/home', element: <Home /> },
		{ path: '/memo', element: <Memo /> },
		{ path: '/chat', element: <Chat /> }
	])

	return routes
}

export default TeamPageRouterConfig
