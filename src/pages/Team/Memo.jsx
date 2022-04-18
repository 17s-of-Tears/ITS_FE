import { memoContentBox, memoContents } from 'lib/staticData'
import React, { useState } from 'react'
import { ReactComponent as Close } from 'assets/svg/close.svg'
import Modal from 'components/modal/Memo'

const Memo = () => {
	const [isModal, setIsModal] = useState(false)

	const onOpenModal = () => setIsModal(true)
	const onCloseModal = () => setIsModal(false)
	return (
		<>
			<div className="memo__box">
				{memoContentBox.map(box => (
					<div key={box.id} className="memo__contents">
						{memoContents.map(content => (
							<div key={content.id} className="memo__contents_box">
								메모메모 <Close />
							</div>
						))}
						<button onClick={onOpenModal} className="memo__add_btn">
							메모 추가
						</button>
					</div>
				))}
			</div>
			{isModal && <Modal onCloseModal={onCloseModal} />}
		</>
	)
}
export default Memo
