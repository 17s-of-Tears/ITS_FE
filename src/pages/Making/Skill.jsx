import React, { useMemo, useState } from 'react'

import { SkillContainer } from './Skill.styled'
import SkillCard from '@/components/common/SkillCard'
import skillData from '@/data/skillData'

const Skill = ({ teamInfo, setTeamInfo }) => {
	const [pagination, setPagination] = useState(1)

	const getskillsData = useMemo(() => {
		const limit = [12, 24]
		const page = [0, 12]
		return skillData.slice(page[pagination - 1], limit[pagination - 1])
	}, [pagination])

	const onChangePagination = prev => () => {
		prev === 'prev'
			? setPagination(prev => (prev -= 1))
			: setPagination(prev => (prev += 1))
	}

	return (
		<SkillContainer>
			<div className="skill__title">
				<span>📗 언어 / 라이브러리 를 선택해주세요!</span>
				<span className="skill__title-sub">복수로 선택할 수 있어요!</span>
			</div>

			<hr />

			<div className="skill__content">
				{getskillsData.map(choice => (
					<SkillCard
						key={choice.id}
						choice={choice}
						active={choice.active}
						teamInfo={teamInfo}
						setTeamInfo={setTeamInfo}
					/>
				))}
			</div>
			<div className="skill__move">
				<button
					className="skill__move-btn"
					onClick={onChangePagination('prev')}
					disabled={pagination === 1}
				>
					이전
				</button>
				<span> {pagination} / 2 </span>
				<button
					className="skill__move-btn"
					onClick={onChangePagination('next')}
					disabled={pagination === 2}
				>
					다음
				</button>
			</div>
		</SkillContainer>
	)
}

export default Skill
