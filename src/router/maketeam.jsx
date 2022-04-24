import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Purpose = lazy(() => import('../pages/Making/Purpose'))
const Skill = lazy(() => import('../pages/Making/Skill'))
const Name = lazy(() => import('../pages/Making/Name'))

const MakingPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/purpose', element: <Purpose /> },
		{ path: '/skill', element: <Skill /> },
		{ path: '/name', element: <Name /> }
	])

	return routes
}

export default MakingPageRouterConfig
