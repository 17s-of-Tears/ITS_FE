import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Purpose = lazy(() => import('../pages/Making/Purpose'))
const Skill = lazy(() => import('../pages/Making/Skill'))
const Name = lazy(() => import('../pages/Making/Name'))
const Description = lazy(() => import('../pages/Making/Description'))
const Success = lazy(() => import('../pages/Making/Success.jsx'))

const MakingPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/purpose', element: <Purpose /> },
		{ path: '/skill', element: <Skill /> },
		{ path: '/name', element: <Name /> },
		{ path: '/description', element: <Description /> },
		{ path: '/success', element: <Success /> }
	])

	return routes
}

export default MakingPageRouterConfig
