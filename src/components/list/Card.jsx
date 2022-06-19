import { useNavigate } from 'react-router-dom'

import { CardContainer } from './Card.styled'

const Card = ({ title, category, date, skills, comment, hits }) => {
	const navigate = useNavigate()

	const onMoveToDetail = () => navigate('/detail')

	return (
		<CardContainer onClick={onMoveToDetail}>
			<div className="card">
				<div className="card__info">
					<span className="card__info-category  color-aa">{category}</span>
					<span className="card__info-title">{title}</span>
					<span className="card__info-date color-aa font-small">{date}</span>
				</div>
				<div className="card__skill">
					{skills.map(skill => (
						<div className="card__skill-item" key={skill.id}>
							<span className="font-small">{skill.title}</span>
							<skill.Icon width={'50px'} height={'50px'} />
						</div>
					))}
				</div>
				<div className="card__liker color-aa font-small">
					<span>댓글{comment}</span>
					<span>조회수{hits}</span>
				</div>
			</div>
		</CardContainer>
	)
}

export default Card
