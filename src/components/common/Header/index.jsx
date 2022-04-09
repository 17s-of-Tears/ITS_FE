import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../Logo'
import { HeaderContainer } from './styles'

const Header = () => {
	const location = useLocation()

	const menus = useMemo(
		() => [
			{ id: 1, name: '팀 찾기', to: '/list' },
			{ id: 2, name: '커뮤니티', to: '/post' }
		],
		[]
	)

	return (
		<HeaderContainer>
			<Logo />
			<div className="header__menus">
				{menus.map(menu => (
					<Link
						key={menu.id}
						to={menu.to}
						className={location.pathname === menu.to ? 'current__page' : null}
					>
						{menu.name}
					</Link>
				))}
			</div>
			<button className="header__user_btn">로그인 | 회원가입</button>
		</HeaderContainer>
	)
}

export default Header
