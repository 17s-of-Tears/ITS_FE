import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/HomePage'))
const List = lazy(() => import('@/pages/ListPage'))
const ListDetail = lazy(() => import('@/components/list/DetailPage'))
const Post = lazy(() => import('@/pages/Post/PostPage'))
const My = lazy(() => import('@/pages/MyPage'))
const Making = lazy(() => import('@/pages/Making'))
const Resume = lazy(() => import('@/pages/Resume'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/list', element: <List /> },
		{ path: '/detail', element: <ListDetail /> },
		{ path: '/post', element: <Post /> },
		{ path: '/my/:id/*', element: <My /> },
		{ path: '/making/*', element: <Making /> },
		{ path: '/resume', element: <Resume /> }
	])

	return routes
}

export default RouterConfig
