import React from 'react'
import { CardContainer } from './styles'

const Card = ({ title, category, date, skills, comment, hits }) => (
	<CardContainer>
		<div className="list_box">
			<span className="list__box_category">{category}</span>
			<span className="list__box_title">{title}</span>
			<span className="list__box_date">{date}</span>
			<div className="skill">
				{skills.map(skill => (
					<div className="skill__box" key={skill.id}>
						{skill.title}
						<img src={skill.img} alt={skill.title} />
					</div>
				))}
			</div>
			<div className="list__box_like">
				<span>
					댓글{comment} 조회수{hits}
				</span>
			</div>
		</div>
	</CardContainer>
)

export default Card
