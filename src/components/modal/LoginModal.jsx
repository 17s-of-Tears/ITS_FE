import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import useInput from '@/hooks/useInput'
import {
	clearStateSuccessAction,
	logInRequest,
	clearStateFailureAction
} from '@/store/user/user.actions'
import validtionEmail from '@/utils/validtionEmail'
import { LoginModalContainer } from './LoginModal.styled'

const SignUpModal = ({ onChangeAuthMode, onCloseModal }) => {
	const dispatch = useDispatch()
	const { logInLoading, logInDone, logInError } = useSelector(
		state => state.user
	)

	const [email, onChangeEmail] = useInput('')
	const [password, onChangePassword] = useInput('')

	useEffect(() => {
		if (logInError) toast.error(logInError)
		if (logInDone) {
			onCloseModal()
			dispatch(clearStateSuccessAction())
		}
	}, [dispatch, logInDone, logInError, onCloseModal])

	const onChangeSignUpModal = () => {
		onChangeAuthMode()
		logInError && dispatch(clearStateFailureAction())
	}

	//* 로그인 시도
	const onSubmitLogin = useCallback(
		e => {
			e.preventDefault()

			//* 이메일 형식이면 true | 아니면 false
			const isEmailValid = validtionEmail(email)
			if (!isEmailValid) return toast.error('이메일 형식이 아닙니다.')

			const userData = { email, password }
			dispatch(logInRequest(userData))
		},
		[email]
	)

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
				<Button fullSize py={12} type="submit" loading={logInLoading}>
					로그인
				</Button>
			</form>
			<span className="login__signup-btn">
				잇츠가 처음이신가요? &nbsp;
				<span
					className="login__signup-btn--primary"
					onClick={onChangeSignUpModal}
				>
					회원가입
				</span>
			</span>
		</LoginModalContainer>
	)
}

export default SignUpModal
