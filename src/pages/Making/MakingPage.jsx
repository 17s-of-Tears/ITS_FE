import Logo from 'components/common/Logo'
import React from 'react'

import MakingPageRouterConfig from 'router/maketeam'
import { MainContainer } from './styles'

const MakingPage = () => (
	<MainContainer>
		<Logo />
		<MakingPageRouterConfig />
	</MainContainer>
)

export default MakingPage
