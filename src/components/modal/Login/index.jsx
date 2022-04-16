import React, { useState } from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ReactComponent as Cat } from 'assets/svg/github.svg'

import Logo from 'components/common/Logo'
import { LoginContainer } from './styles'

const Modal = ({ onCloseModal }) => {
	const [isLoginMode, setIsLoginMode] = useState(true)

	const onChangeMode = () => setIsLoginMode(prev => !prev)

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
						<input
							type="text"
							className="modal__login_em"
							placeholder="이메일"
						></input>
						<input
							type="password"
							className="modal__login_pw"
							placeholder="비밀번호"
						></input>
						<button className="modal__login_btn1">로그인</button>
						<p className="modal__login_first">
							이츠가 처음이신가요? <span onClick={onChangeMode}>회원가입</span>
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
					</>
				) : (
					<>
						<input
							type="text"
							className="modal__login_em"
							placeholder="이메일"
						></input>
						<input
							type="text"
							className="modal__login_pw"
							placeholder="닉네임"
						></input>
						<input
							type="password"
							className="modal__login_pw"
							placeholder="비밀번호"
						></input>
						<input
							type="password"
							className="modal__login_pw"
							placeholder="비밀번호 확인"
						></input>
						<button className="modal__login_btn1">회원가입</button>
						<p className="modal__login_first">
							이미 이츠 회원이신가요? <span onClick={onChangeMode}>로그인</span>
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
					</>
				)}
			</div>
		</LoginContainer>
	)
}

export default Modal
