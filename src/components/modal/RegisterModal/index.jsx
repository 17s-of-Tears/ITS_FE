import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import { ModalContainer } from './style'

const RegisterModal = ({ setIsModal }) => {
	const navigate = useNavigate()

	const onCloseModal = () => setIsModal(false)
	const onMovePageList = () => navigate('/list')

	return (
		<ModalContainer>
			<div className="modal__register">
				<button className="modal__register_close" onClick={onCloseModal}>
					<Close />
				</button>
				<div className="modal__register_img">
					<img src="/images/register.png" alt="123"></img>
					<span>모집중인 팀에 등록하기</span>
				</div>
				<span className="modal__register_txt">
					📝 팀 모집에 보일 팀에 대한 한 줄 소개를 써주세요!
				</span>
				<input type="text" className="modal__register_tbox"></input>
				<button className="modla__register_clear" onClick={onMovePageList}>
					모집중인 팀에 등록하기
				</button>
			</div>
		</ModalContainer>
	)
}

export default RegisterModal
