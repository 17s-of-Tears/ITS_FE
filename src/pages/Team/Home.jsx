import { teamPageNotice, teamPageMembers } from 'lib/staticData'
import React, { useState } from 'react'

import Modal from 'components/modal/Notice'

const Home = () => {
	const nowYear = () => new Date().getFullYear()
	const nowMonth = () => new Date().getMonth() + 1
	const nowDate = () => new Date().getDate()

	const [isModal, setIsModal] = useState(false)

	const onOpenModal = () => setIsModal(true)
	const onCloseModal = () => setIsModal(false)

	return (
		<>
			<div className="team__contents">
				<div className="team__contents_notice">
					<p className="team__contents_title">공지사항</p>
					<hr />
					{teamPageNotice.map(notice => (
						<div key={notice.id} className="notice_txt">
							<p onClick={onOpenModal} className="notice__txt1">
								{notice.name}
							</p>
							<p>
								{nowYear()}.{nowMonth()}.{nowDate()}
							</p>
						</div>
					))}
					<hr />
					<div className="notice__num">
						&lt;
						<p>1</p>
						<p>2</p>
						<p>3</p>
						<p>4</p>
						<p>5</p>
						&gt;
					</div>
				</div>
				<div className="team__contents_list">
					<p className="team__contents_title">팀원목록</p>
					<hr />
					<div className="team__members">
						{teamPageMembers.map(members => (
							<div className="team__members_user">
								<img src="/images/user.png" alt="11"></img>
								<p key={members.id}>{members.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="team__contents_date">
				<p className="team__contents_title">팀캘린더</p>
			</div>
			{isModal && <Modal onCloseModal={onCloseModal} />}
		</>
	)
}
export default Home
