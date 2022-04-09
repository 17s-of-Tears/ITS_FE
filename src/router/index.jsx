import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/HomePage'))
const List = lazy(() => import('pages/ListPage'))
const Post = lazy(() => import('pages/PostPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/list', element: <List /> },
		{ path: '/post', element: <Post /> }
	])

	return routes
}

export default RouterConfig
