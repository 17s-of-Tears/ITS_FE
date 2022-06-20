import React from 'react'
import Button from '../common/Button'
import { ConfirmModalContainer } from './ConfirmModal.styled'

const ConfirmModal = () => {
	return (
		<ConfirmModalContainer>
			<h2 className="confirm__title">임시 초대장 삭제</h2>
			<div className="confirm__info">
				<span>임시 초대장을 삭제하시겠습니까?</span>
				<span>삭제한 초대장은 복구할 수 없습니다.</span>
			</div>
			<div className="confirm__btn">
				<Button className="confirm__btn-close">닫기</Button>
				<Button className="confirm__btn-delete">삭제</Button>
			</div>
		</ConfirmModalContainer>
	)
}

export default ConfirmModal
