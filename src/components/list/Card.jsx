import { useNavigate } from 'react-router-dom'

import { skillDatas } from '@/constant/host'
import {
	CardCategory,
	CardDate,
	CardFooter,
	CardGroup,
	CardInfo,
	CardItem,
	CardTitle,
	CardWrapper
} from './Card.styled'

const Card = ({ createDate, goal, hits, id, skills, teamName }) => {
	const navigate = useNavigate()
	const onMoveToDetail = () => navigate(`./${id}`)

	const skillIcon = skill => skillDatas.find(e => e.name === skill)

	return (
		<CardWrapper onClick={onMoveToDetail}>
			<CardInfo>
				<CardCategory>
					{goal === 'project' ? '프로젝트' : '스터디'}
				</CardCategory>
				<CardTitle>{teamName}</CardTitle>
				<CardDate>{createDate}</CardDate>
			</CardInfo>
			<CardGroup>
				{skills.map(skill => {
					const SkillIcon = skillIcon(skill).SkillIcon

					return (
						<CardItem key={skill}>
							<span key={skill}>{skill}</span>
							<SkillIcon width="45px" height="100%" />
						</CardItem>
					)
				})}
			</CardGroup>
			<CardFooter>
				<span>댓글 0</span>
				<span>조회수 {hits}</span>
			</CardFooter>
		</CardWrapper>
	)
}

export default Card
