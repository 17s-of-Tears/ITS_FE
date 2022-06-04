import React, { Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as ReactLogoIcon } from '@/assets/svg/React.svg'
import { ReactComponent as NodeLogoIcon } from '@/assets/svg/Node.svg'
import TeamPageRouterConfig from '@/router/teampage'
import { teamPageMenus } from '@/lib/staticData'
import AppLayout from '@/layouts/AppLayout'

import { Maincontainer } from './styles'

const TeamPage = () => {
	const { pathname } = useLocation()

	return (
		<AppLayout>
			<Maincontainer>
				<div className="team__profile">
					<>
						<img src="/images/net.png" className="net" alt="123"></img>
					</>
					<div>
						<p className="team__profile_name">이츠 프로젝트</p>
						<p className="team__profile_intro">
							이츠는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.
						</p>

						<ReactLogoIcon />
						<NodeLogoIcon />
					</div>
				</div>

				<div className="team__play">
					<div className="menus">
						{teamPageMenus.map(menu => (
							<Link
								key={menu.id}
								to={menu.to}
								className={`team__menu ${
									menu.info === pathname.substring(8) ? 'active' : ''
								}`}
							>
								{menu.name}
							</Link>
						))}
					</div>
					<div className="contents">
						<Suspense fallback={<span>Loading...</span>}>
							<TeamPageRouterConfig />
						</Suspense>
					</div>
				</div>
			</Maincontainer>
		</AppLayout>
	)
}
export default TeamPage
