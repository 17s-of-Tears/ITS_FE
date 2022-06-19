import React, { useEffect } from 'react'
import { NameBox } from './Name.styled'

const Name = ({ teamInfo, setTeamInfo }) => {
	const teamNameInputEvent = e => {
		setTeamInfo(prev => ({
			...prev,
			teamName: e.target.value
		}))
	}

	return (
		<NameBox>
			<span className="name__title">📘 팀의 이름을 정해주세요!</span>

			<hr />

			<input
				type="text"
				placeholder="팀 이름을 입력해주세요!"
				className="name__content"
				value={teamInfo.teamName}
				onChange={e => teamNameInputEvent(e)}
			/>
		</NameBox>
	)
}
export default Name
