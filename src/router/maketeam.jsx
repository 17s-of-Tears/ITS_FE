import { Navigate, useRoutes } from 'react-router-dom'

import Purpose from '@/pages/Making/Purpose'
import Skill from '@/pages/Making/Skill'
import Name from '@/pages/Making/Name'
import Description from '@/pages/Making/Description'
import Success from '@/pages/Making/Success'

const MakingPageRouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Navigate to="/making/purpose" /> },
		{ path: 'purpose', element: <Purpose /> },
		{ path: 'skill', element: <Skill /> },
		{ path: 'name', element: <Name /> },
		{ path: 'description', element: <Description /> },
		{ path: 'success', element: <Success /> }
	])

	return routes
}

export default MakingPageRouterConfig
