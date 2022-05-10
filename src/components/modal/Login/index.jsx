import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ReactComponent as Cat } from 'assets/svg/github.svg'

import Logo from 'components/common/Logo'
import { LoginContainer } from './styles'

const Modal = ({ onCloseModal }) => {
	const [isLoginMode, setIsLoginMode] = useState(true)

	const onChangeMode = () => setIsLoginMode(prev => !prev)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const [nameMessage, setNameMessage] = useState('')
	const [emailMessage, setEmailMessage] = useState('')
	const [passwordMessage, setPasswordMessage] = useState('')
	const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

	const [isName, setIsName] = useState(false)
	const [isEmail, setIsEmail] = useState(false)
	const [isPassword, setIsPassword] = useState(false)
	const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
	const router = useNavigate()

	const onSubmit = useCallback(
		async e => {
			e.preventDefault()
		},
		[email, name, password, router]
	)

	const onChangeName = useCallback(e => {
		setName(e.target.value)
		if (e.target.value.length < 2 || e.target.value.length > 8) {
			setNameMessage('2글자 이상 8글자 미만으로 입력해주세요.')
			setIsName(false)
		} else {
			setNameMessage('')
			setIsName(true)
		}
	}, [])

	const onChangeEmail = useCallback(e => {
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
		const emailCurrent = e.target.value
		setEmail(emailCurrent)

		if (!emailRegex.test(emailCurrent)) {
			setEmailMessage('이메일 형식이 틀렸어요!')
			setIsEmail(false)
		} else {
			setEmailMessage('')
			setIsEmail(true)
		}
	}, [])

	const onChangePassword = useCallback(e => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
		const passwordCurrent = e.target.value
		setPassword(passwordCurrent)

		if (!passwordRegex.test(passwordCurrent)) {
			setPasswordMessage(
				'숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
			)
			setIsPassword(false)
		} else {
			setPasswordMessage('')
			setIsPassword(true)
		}
	}, [])

	const onChangePasswordConfirm = useCallback(
		e => {
			const passwordConfirmCurrent = e.target.value
			setPasswordConfirm(passwordConfirmCurrent)

			if (password === passwordConfirmCurrent) {
				setPasswordConfirmMessage('')
				setIsPasswordConfirm(true)
			} else {
				setPasswordConfirmMessage('비밀번호가 틀려요.')
				setIsPasswordConfirm(false)
			}
		},
		[password]
	)

	return (
		<LoginContainer>
			<div className="modal__login">
				<button onClick={onCloseModal} className="modal__login_close">
					<Close />
				</button>
				<div className="modal__login_logo">
					<Logo />
				</div>
				<p className="modal__login_lg">{isLoginMode ? '로그인' : '회원가입'}</p>
				{isLoginMode ? (
					<>
						<form onSubmit={onSubmit} className="form">
							<input
								text="이메일"
								type="email"
								typeName="email"
								onChange={onChangeEmail}
								placeholder="이메일"
								className="modal__login_em"
							/>
							{email.length > 0 && (
								<span className={`message ${isEmail ? 'success' : 'error'}`}>
									{emailMessage}
								</span>
							)}

							<input
								onChange={onChangePassword}
								passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
								title="비밀번호"
								typeTitle="password"
								placeholder="비밀번호"
								className="modal__login_pw"
							/>
							{password.length > 0 && (
								<span className={`message ${isPassword ? 'success' : 'error'}`}>
									{passwordMessage}
								</span>
							)}

							<button type="submit" className="modal__login_btn1">
								로그인
							</button>

							<p className="modal__login_first">
								이츠가 처음이신가요?{' '}
								<span onClick={onChangeMode}>회원가입</span>
							</p>
							<div className="modal__modal_or">
								<hr />
								또는
								<hr />
							</div>
							<button className="modal__login_btn2">
								<Cat />
								Github 로그인
							</button>
						</form>
					</>
				) : (
					<>
						<form onSubmit={onSubmit} className="form">
							<input
								text="이메일"
								type="email"
								typeName="email"
								onChange={onChangeEmail}
								placeholder="이메일"
								className="modal__login_em"
							/>
							{email.length > 0 && (
								<span className={`message ${isEmail ? 'success' : 'error'}`}>
									{emailMessage}
								</span>
							)}
							<input
								text="이름"
								type="text"
								typeName="name"
								onChange={onChangeName}
								placeholder="닉네임"
								className="modal__login_pw"
							/>
							{name.length > 0 && (
								<span className={`message ${isName ? 'success' : 'error'}`}>
									{nameMessage}
								</span>
							)}
							<input
								onChange={onChangePassword}
								passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
								title="비밀번호"
								typeTitle="password"
								placeholder="비밀번호"
								className="modal__login_pw"
							/>
							{password.length > 0 && (
								<span className={`message ${isPassword ? 'success' : 'error'}`}>
									{passwordMessage}
								</span>
							)}
							<input
								onChange={onChangePasswordConfirm}
								passwordText=" "
								title="비밀번호 확인"
								typeTitle="passwordConfirm"
								placeholder="비밀번호 확인"
								className="modal__login_pw"
							/>
							{passwordConfirm.length > 0 && (
								<span
									className={`message ${
										isPasswordConfirm ? 'success' : 'error'
									}`}
								>
									{passwordConfirmMessage}
								</span>
							)}
							<button className="modal__login_btn1">회원가입</button>
							<p className="modal__login_first">
								이미 이츠 회원이신가요?{' '}
								<span onClick={onChangeMode}>로그인</span>
							</p>
							<div className="modal__modal_or">
								<hr />
								또는
								<hr />
							</div>
							<button className="modal__login_btn2">
								<Cat />
								Github 로그인
							</button>
						</form>
					</>
				)}
			</div>
		</LoginContainer>
	)
}

export default Modal
