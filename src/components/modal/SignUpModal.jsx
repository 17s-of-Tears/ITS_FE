import Button from 'components/common/Button'
import Input from 'components/common/Input'
import useInput from 'hooks/useInput'
import { useCallback, useEffect, useState } from 'react'
import { SignUpModalContainer } from './SignUpModal.styled'

const SignUpModal = ({ onChangeAuthMode }) => {
	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [passwordCheck, onChangePasswordCheck] = useInput('')

	const [isPasswordValid, setIsPasswordValid] = useState(false)

	//*  비밀번호, 비밀번호 확인이 같은지 검사
	const onValidPassword = useCallback(
		() =>
			password === passwordCheck
				? isPasswordValid(false)
				: isPasswordValid(true),
		[isPasswordValid, password, passwordCheck]
	)

	// useEffect(() => {
	// 	onValidPassword()
	// }, [onValidPassword])

	return (
		<SignUpModalContainer>
			<h2 className="signup__title">회원가입</h2>
			<form className="signup__form">
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
			</form>
			<Button fullSize py={12} type="submit">
				회원가입
			</Button>
			<span className="signup__login-btn">
				이미 잇츠 회원이신가요? &nbsp;
				<span className="signup__login-btn--primary" onClick={onChangeAuthMode}>
					로그인
				</span>
			</span>
		</SignUpModalContainer>
	)
}

export default SignUpModal
