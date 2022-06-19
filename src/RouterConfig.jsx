import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/HomePage'))
const Host = lazy(() => import('@/pages/HostPage'))
const List = lazy(() => import('@/pages/ListPage'))
const My = lazy(() => import('@/pages/MyPage/MyPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/host', element: <Host /> },
		{ path: '/list', element: <List /> }
	])

	return routes
}

export default RouterConfig
