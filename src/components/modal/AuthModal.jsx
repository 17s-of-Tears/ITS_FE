import { useState } from 'react'

import { ReactComponent as CloseIcon } from '/public/svg/close.svg'
import Logo from '@/components/common/Logo'
import { AuthModalContainer } from './AuthModal.styled'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

const AuthModal = ({ onCloseModal }) => {
	const [authMode, setAuthMode] = useState('login') //* login | signup

	const onChangeAuthMode = () =>
		setAuthMode(prev => (prev === 'login' ? 'signup' : 'login'))

	return (
		<AuthModalContainer>
			<Logo noLink />
			<CloseIcon onClick={onCloseModal} />
			{authMode === 'login' ? (
				<LoginModal
					onChangeAuthMode={onChangeAuthMode}
					onCloseModal={onCloseModal}
				/>
			) : (
				<SignUpModal
					onChangeAuthMode={onChangeAuthMode}
					setAuthMode={setAuthMode}
				/>
			)}
		</AuthModalContainer>
	)
}

export default AuthModal
