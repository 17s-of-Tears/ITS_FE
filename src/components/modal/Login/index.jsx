import React from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { LoginContainer } from './styles'

const Modal = () => (
	<LoginContainer>
		<div className="modal__login">
			<button className="modal__login_close">
				<Close />
			</button>
			<p className="modal__login_its">It's</p>
			<p className="modal__login_lg">로그인</p>
			<input type="text"></input>
			<input type="password"></input>
			<button className="modal__login_btn1">로그인</button>
			<p>
				이츠가 처음이신가요?<span>회원가입</span>
			</p>
			<button className="modal__login_btn2">Github 로그인</button>
		</div>
	</LoginContainer>
)

export default Modal
