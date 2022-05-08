import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('pages/Home/HomePage'))
const List = lazy(() => import('pages/List/ListPage'))
const Detail = lazy(() => import('pages/List/ListDetail'))
const Post = lazy(() => import('pages/Post/PostPage'))
const My = lazy(() => import('pages/My/MyPage'))
const Team = lazy(() => import('pages/Team/TeamPage'))
const Making = lazy(() => import('pages/Making'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/list', element: <List /> },
		{ path: '/detail', element: <Detail /> },
		{ path: '/post', element: <Post /> },
		{ path: '/my/:id/*', element: <My /> },
		{ path: '/team/:id/*', element: <Team /> },
		{ path: '/making/*', element: <Making /> }
	])

	return routes
}

export default RouterConfig
