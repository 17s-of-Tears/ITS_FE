import AuthModal from '@/components/modal/AuthModal'
import useModal from '@/hooks/useModal'
import Button from './Button'
import HeaderUserButton from './HeaderUserButton'
import Logo from './Logo'
import { HeaderContainer } from './Header.styled'

const Header = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<>
			<HeaderContainer>
				<div className="header">
					<Logo />
					<HeaderUserButton onOpenModal={onOpenModal} />
				</div>
			</HeaderContainer>
			<ModalPortal>
				<AuthModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	)
}

export default Header
