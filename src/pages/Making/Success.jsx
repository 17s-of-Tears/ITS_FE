import Modal from 'components/modal/Register'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Progress } from './styles'

const Purpose = () => {
	const [isModal, setIsModal] = useState(false)

	const openModal = () => setIsModal(true)
	const closeModal = () => setIsModal(false)

	const navigate = useNavigate()

	const [count, setCount] = useState(5)

	const MinusCount = () => {
		if (count === 1) {
			setCount(1)
		} else {
			setCount(count - 1)
		}
		navigate('/making/4/description')
	}

	return (
		<>
			<span className="making_title">팀을 성공적으로 만들었습니다!</span>
			<div className="progress">
				<Progress width={`${(count / 5) * 100}%`} />
			</div>
			<img className="success__img" src="/images/comp2.png" alt="111"></img>
			<span className="success__txt1">
				팀을 구하기 위해 <span className="success__txt2">모집중인 팀</span>에
				등록해보세요!
			</span>
			<div className="box__success">
				<span>
					🔎 모집중인 팀에 등록을 하셔야 팀에대한 정보가 공개적으로 노출돼요
				</span>
				<span>
					🔎 다른 사용자가 모집중인 팀페이지를 통해 팀가입 요청을 하면 팀에
					초대를 할 수 있어요
				</span>
				<span>
					🔎 지금 등록 안해도 마이페이지 > 내 팀 메뉴를 통해서 언제든지 등록할
					수 있어요
				</span>
				<span>
					🔎 모집이 완료되면 모집중인 팀을 비활성화 할 수 있으며, 언제든지
					활성화 할 수 있어요
				</span>
			</div>
			<div className="btn">
				<button className="beforebtn" onClick={MinusCount}>
					팀 페이지로 이동하기
				</button>
				<button className="nextbtn" onClick={openModal}>
					모집중인 팀에 등록하기
				</button>
			</div>
			{isModal && <Modal onCloseModal={closeModal} />}
		</>
	)
}
export default Purpose
