import React from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ModalContainer } from './style'

const Modal = ({ onCloseModal }) => (
	<ModalContainer>
		<div className="modal__memo">
			<button className="modal__memo_close" onClick={onCloseModal}>
				<Close />
			</button>
			<p>메모 추가</p>
		</div>
	</ModalContainer>
)

export default Modal
