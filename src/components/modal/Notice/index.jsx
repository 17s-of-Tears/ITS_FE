import React from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ModalContainer } from './styles'

const Modal = ({ onCloseModal }) => (
	<ModalContainer>
		<div className="modal__notice">
			<button className="modal__notice_close" onClick={onCloseModal}>
				<Close />
			</button>
			<span>제목</span>
			<span>내용</span>
		</div>
	</ModalContainer>
)

export default Modal
