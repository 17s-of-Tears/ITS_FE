import { useSelector } from 'react-redux'

import AuthModal from '@/components/modal/AuthModal'
import useModal from '@/hooks/useModal'
import Button from './Button'
import Logo from './Logo'
import { HeaderContainer } from './Header.styled'

const Header = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<>
			<HeaderContainer>
				<div className="header">
					<Logo />

					<Button onClick={onOpenModal}>로그인 | 회원가입</Button>
				</div>
			</HeaderContainer>
			<ModalPortal>
				<AuthModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	)
}

export default Header
