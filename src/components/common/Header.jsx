import AuthModal from '@/components/modal/AuthModal'
import useModal from '@/hooks/useModal'
import Button from './Button'
import HeaderUserButton from './HeaderUserButton'
import Logo from './Logo'
import { HeaderContainer, HeaderMenu } from './Header.styled'
import { menus } from '@/constant/homeData'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<>
			<HeaderContainer>
				<div className="header">
					<Logo />
					<HeaderMenu>
						{menus.map(({ to, name }) => (
							<Link
								key={name}
								to={to}
								className={pathname.includes(to) ? 'active' : ''}
							>
								{name}
							</Link>
						))}
					</HeaderMenu>
					<HeaderUserButton onOpenLoginModal={onOpenModal} />
				</div>
			</HeaderContainer>
			<ModalPortal>
				<AuthModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	)
}

export default Header
