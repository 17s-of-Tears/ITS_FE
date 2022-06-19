import React, { useState } from 'react'
import { SkillBox } from './SkillCard.styled'

const SkillCard = ({ choice, setTeamInfo }) => {
	const [active, setActive] = useState(false)
	const onClickEvent = () => {
		setActive(!active)
		setTeamInfo(prev => ({
			...prev,
			teamSkills: [...prev.teamSkills, choice.id]
		}))
	}

	return (
		<SkillBox>
			<div
				key={choice.id}
				className="skillbox__content"
				onClick={() => {
					onClickEvent()
				}}
				style={active ? { border: '1px solid #6C5CE7' } : null}
			>
				<choice.Icon className="skillbox__content-icon" />
				<span className="skillbox__content-info">{choice.name}</span>
			</div>
		</SkillBox>
	)
}

export default SkillCard
