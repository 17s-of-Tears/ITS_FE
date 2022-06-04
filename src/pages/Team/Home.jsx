import React, { useState } from 'react'

import Modal from '@/components/modal/Notice'
import { teamPageNotice, teamPageMembers } from '@/lib/staticData'

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
							<span>
								{nowYear()}.{nowMonth()}.{nowDate()}
							</span>
						</div>
					))}
					<hr />
					<div className="notice__num">
						&lt;
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						&gt;
					</div>
				</div>
				<div className="team__contents_list">
					<p className="team__contents_title">팀원목록</p>
					<hr />
					<div className="team__members">
						{teamPageMembers.map((members, i) => (
							<div className="team__members_user" key={i}>
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
