import Modal from 'components/modal/Login'
import { homeMenus } from 'lib/staticData'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../Logo'
import { HeaderContainer } from './styles'

const Header = () => {
	const [isModal, setIsModal] = useState(false)

	const onOpenModal = () => {
		setIsModal(true)
	}
	const onCloseModal = () => setIsModal(false)

	const location = useLocation()

	return (
		<HeaderContainer>
			<Logo />
			<div className="header__menus">
				{homeMenus.map(menu => (
					<Link
						key={menu.id}
						to={menu.to}
						className={location.pathname === menu.to ? 'current__page' : null}
					>
						{menu.name}
					</Link>
				))}
			</div>
			<button onClick={onOpenModal} className="header__user_btn">
				로그인 | 회원가입
			</button>
			{isModal && <Modal onCloseModal={onCloseModal} />}
		</HeaderContainer>
	)
}

export default Header
