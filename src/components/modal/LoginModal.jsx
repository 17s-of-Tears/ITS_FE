import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import useInput from '@/hooks/useInput'
import { logInRequest } from '@/store/user/user.actions'
import { LoginModalContainer } from './LoginModal.styled'

const SignUpModal = ({ onChangeAuthMode, onCloseModal }) => {
	const dispatch = useDispatch()
	const { logInLoading, logInDone, logInError } = useSelector(user => user)

	const [email, onChangeEmail] = useInput('')
	const [password, onChangePassword] = useInput('')

	const onSubmitLogin = e => {
		e.preventDefault()
		const userData = { email, password }
		console.log(userData)
		toast.success(userData)
		dispatch(logInRequest(userData))
		if (logInDone) {
			onCloseModal()
		}
	}

	return (
		<LoginModalContainer>
			<h2 className="login__title">로그인</h2>
			<form className="login__form" onSubmit={onSubmitLogin}>
				<Input
					type="email"
					value={email}
					onChange={onChangeEmail}
					placeholder="이메일"
				/>
				<Input
					type="password"
					value={password}
					onChange={onChangePassword}
					placeholder="비밀번호"
				/>
				<Button fullSize py={12} type="submit">
					로그인
				</Button>
			</form>
			<span className="login__signup-btn">
				잇츠가 처음이신가요? &nbsp;
				<span className="login__signup-btn--primary" onClick={onChangeAuthMode}>
					회원가입
				</span>
			</span>
		</LoginModalContainer>
	)
}

export default SignUpModal
