import { useNavigate } from 'react-router-dom'
import { CardContainer } from './Card.styled'

const Card = ({ title, category, date, skills, comment, hits }) => {
	const navigate = useNavigate()

	const onMoveToDetail = () => navigate('/detail')

	return (
		<CardContainer>
			<div onClick={onMoveToDetail} className="list-box">
				<span className="list-box__category">{category}</span>
				<span className="list-box__title">{title}</span>
				<span className="list-box__date">{date}</span>
				<div className="list-box__skill-group">
					{skills.map(skill => (
						<div className="list-box_skill-item" key={skill.id}>
							{skill.title}
							<img src={skill.img} alt={skill.title} />
						</div>
					))}
				</div>
				<span className="list-box__liker">
					댓글{comment} | 조회수{hits}
				</span>
			</div>
		</CardContainer>
	)
}

export default Card
