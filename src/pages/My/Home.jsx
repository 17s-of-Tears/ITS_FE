import React from 'react'

import { ReactComponent as ReactLogoIcon } from 'assets/svg/React.svg'
import { ReactComponent as NodeLogoIcon } from 'assets/svg/Node.svg'
import { teamMenus } from 'lib/staticData'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	const onMovePageTeam = () => {
		navigate('/team/4/home')
	}

	return (
		<>
			<div className="my__profile_jointeam">
				<p className="my__profile_teamtxt1">참여중인 팀</p>
				<p className="my__profile_teamtxt2">
					호수님은 총 2개의 팀에 참여하고 있어요.
				</p>
			</div>
			<hr />
			<div className="my__profile_project">
				<div className="my__profile_proteam">
					<p className="my__profile_protxt1">
						이츠 스터디 매칭 서비스 프로젝트
					</p>
					<p className="my__profile_protxt2">
						이츠는 더 쉽게 스터디 팀을 구할 수 있는 방법을 제공합니다.
					</p>
					<ReactLogoIcon />
					<NodeLogoIcon />
				</div>
				{teamMenus.map(menu => (
					<button
						onClick={onMovePageTeam}
						key={menu.id}
						to={menu.to}
						className="my__profile_movebtn"
					>
						{menu.name}
					</button>
				))}
			</div>
			<hr />
		</>
	)
}

export default Home
