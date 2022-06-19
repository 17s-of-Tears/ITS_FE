import React, { useState } from 'react'
import { PurposeContainer } from '@/pages/Making/Purpose.styled.js'
import PurposeBox from '@/components/common/PurposeBox'

const Purpose = ({ teamInfo, setTeamInfo }) => {
	const [selectedBox, setSelectedBox] = useState(teamInfo.teamPurpose) // 'project' | 'study'
	const onClickSelectBox = mode => () => setSelectedBox(mode)

	return (
		<PurposeContainer>
			<div className="purpose__title">
				<span>📕 팀의 목적을 선택해주세요!</span>
				<span className="purpose__title-sub">클릭해서 선택해주세요!</span>
			</div>
			<hr />
			<div className="purpose__content">
				<PurposeBox
					mode="project"
					selectedBox={'project' === selectedBox}
					onClickSelectBox={() => {
						onClickSelectBox('project')
						setSelectedBox('project')
						setTeamInfo(prev => ({
							...prev,
							teamPurpose: 'project'
						}))
					}}
				/>
				<PurposeBox
					mode="study"
					selectedBox={'study' === selectedBox}
					onClickSelectBox={() => {
						onClickSelectBox('study')
						setSelectedBox('study')
						setTeamInfo(prev => ({
							...prev,
							teamPurpose: 'study'
						}))
					}}
				/>
			</div>
		</PurposeContainer>
	)
}

export default Purpose
