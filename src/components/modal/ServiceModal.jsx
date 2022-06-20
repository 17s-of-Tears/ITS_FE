import { useState } from 'react'

import { ReactComponent as CloseIcon } from '/public/svg/close.svg'
import Logo from '@/components/common/Logo'
import SelectBox from '@/components/home/SelectBox'
import { ServiceModalContainer } from './ServiceModal.styled'

const ServiceModal = ({ onCloseModal }) => {
	const [selectedBox, setSelectedBox] = useState('host') //* 'host' | 'member'
	const onClickSelectBox = mode => () => setSelectedBox(mode)

	return (
		<ServiceModalContainer>
			<CloseIcon onClick={onCloseModal} />
			<div className="modal__header">
				<Logo noLink />
				<h2 className="modal__title">이츠에서 같이 성장할 팀을 구해보세요!</h2>
				<span className="modal__description">
					서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!
				</span>
			</div>
			<div className="modal__content">
				<SelectBox
					mode="host"
					selectedBox={'host' === selectedBox}
					onClickSelectBox={onClickSelectBox('host')}
				/>
				<SelectBox
					mode="member"
					selectedBox={'member' === selectedBox}
					onClickSelectBox={onClickSelectBox('member')}
				/>
			</div>
		</ServiceModalContainer>
	)
}

export default ServiceModal
