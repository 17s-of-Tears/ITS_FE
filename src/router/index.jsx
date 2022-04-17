import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/Home/HomePage'))
const List = lazy(() => import('pages/List/ListPage'))
const Post = lazy(() => import('pages/Post/PostPage'))
const My = lazy(() => import('pages/My/MyPage'))
const Team = lazy(() => import('pages/Team/TeamPage'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/list', element: <List /> },
		{ path: '/post', element: <Post /> },
		{ path: '/my/:id/*', element: <My /> },
		{ path: '/team/:id/*', element: <Team /> }
	])

	return routes
}

export default RouterConfig
