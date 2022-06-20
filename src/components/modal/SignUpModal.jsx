import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import useInput from '@/hooks/useInput'
import {
	signUpRequest,
	clearStateSuccessAction
} from '@/store/user/user.actions'
import validtionEmail from '@/utils/validtionEmail'
import { SignUpModalContainer } from './SignUpModal.styled'

const SignUpModal = ({ onChangeAuthMode, setAuthMode }) => {
	const dispatch = useDispatch()
	const { signUpLoading, signUpDone } = useSelector(state => state.user)

	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [passwordCheck, onChangePasswordCheck] = useInput('')

	useEffect(() => {
		if (signUpDone) {
			setAuthMode('login')
			dispatch(clearStateSuccessAction())
		}
	}, [dispatch, setAuthMode, signUpDone])

	//* 회원가입 시도
	const onSubmitSignup = e => {
		e.preventDefault()

		//* 이메일 형식이면 true | 아니면 false
		const isEmailValid = validtionEmail(email)
		if (!isEmailValid) return toast.error('이메일 형식이 아닙니다.')

		//* 비밀번호 확인
		if (password !== passwordCheck)
			return toast.error('비밀번호를 확인해주세요.')

		//* 회원가입 요청
		const userData = { email, nickname, password }
		dispatch(signUpRequest(userData))
	}

	return (
		<>
			<SignUpModalContainer>
				<h2 className="signup__title">회원가입</h2>
				<form className="signup__form" onSubmit={onSubmitSignup}>
					<Input
						type="email"
						value={email}
						onChange={onChangeEmail}
						placeholder="이메일"
					/>
					<Input
						type="text"
						value={nickname}
						onChange={onChangeNickname}
						placeholder="닉네임"
					/>
					<Input
						type="password"
						value={password}
						onChange={onChangePassword}
						placeholder="비밀번호"
					/>
					<Input
						type="password"
						value={passwordCheck}
						onChange={onChangePasswordCheck}
						placeholder="비밀번호 확인"
					/>
					<Button fullSize py={12} type="submit" loading={signUpLoading}>
						회원가입
					</Button>
				</form>
				<span className="signup__login-btn">
					이미 잇츠 회원이신가요? &nbsp;
					<span
						className="signup__login-btn--primary"
						onClick={onChangeAuthMode}
					>
						로그인
					</span>
				</span>
			</SignUpModalContainer>
		</>
	)
}

export default SignUpModal
