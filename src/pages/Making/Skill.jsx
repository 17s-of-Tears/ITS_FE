import React, { useState } from 'react'
import Pagination from 'react-js-pagination'

import { SkillContainer } from './Skill.styled'
import SkillCard from '@/components/common/SkillCard'
import skillData from '@/data/skillData'

const Skill = ({ page, count, setPage }) => {
	return (
		<SkillContainer>
			<div className="skill__title">
				<span>📗 언어 / 라이브러리 를 선택해주세요!</span>
				<span className="skill__title-sub">복수로 선택할 수 있어요!</span>
				<Pagination
					activePage={page}
					itemsCountPerPage={12}
					totalItemsCount={count}
					pageRangeDisplayed={2}
					prevPageText={'<'}
					nextPageText={'>'}
					onChange={setPage}
				/>
			</div>

			<hr />

			<div className="skill__content">
				{skillData.map(choice => (
					<SkillCard key={choice.id} choice={choice} />
				))}
			</div>
		</SkillContainer>
	)
}

export default Skill
