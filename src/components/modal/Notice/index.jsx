import React from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ModalContainer } from './styles'

const Modal = ({ onCloseModal }) => (
	<ModalContainer>
		<div className="modal__notice">
			<button className="modal__notice_close" onClick={onCloseModal}>
				<Close />
			</button>
			<p>제목</p>
			<p>내용</p>
		</div>
	</ModalContainer>
)

export default Modal
