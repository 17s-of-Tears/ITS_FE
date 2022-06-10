import React, { useState } from 'react'
import { SkillBox } from './SkillCard.styled'

const SkillCard = ({ choice }) => {
	const [active, setActive] = useState(false)

	const onClickEvent = () => {
		setActive(!active)
	}

	return active ? (
		<SkillBox>
			<div
				key={choice.id}
				className="skillbox__content"
				onClick={onClickEvent}
				style={{ border: '1px solid blue' }}
			>
				<choice.Icon className="skillbox__content-icon" />
				<span className="skillbox__content-info">{choice.name}</span>
			</div>
		</SkillBox>
	) : (
		<SkillBox>
			<div key={choice.id} className="skillbox__content" onClick={onClickEvent}>
				<choice.Icon className="skillbox__content-icon" />
				<span className="skillbox__content-info">{choice.name}</span>
			</div>
		</SkillBox>
	)
}

export default SkillCard
