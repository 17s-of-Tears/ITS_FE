import { toast } from 'react-toastify'

import { skillDatas } from '@/constant/host'
import Button from '../common/Button'
import {
	SkillCardHeader,
	SkillList,
	SkillGrid,
	SkillItem,
	SkillName
} from './SkillsCard.styled'

const SkillsCard = ({ skills, setSkills }) => {
	const onSelectSkill = skill => () => {
		if (skills.indexOf(skill) >= 0)
			setSkills(prev => prev.filter(v => v !== skill))
		else {
			if (skills.length > 2) return toast.error('최대 3개까지 선택가능합니다.')
			setSkills(prev => [...prev, skill])
		}
	}

	const onClearSkill = () => setSkills([])

	return (
		<>
			<SkillCardHeader>
				<SkillList>
					{skills.length ? (
						skills.map(skill => <span key={skill}>{skill}</span>)
					) : (
						<span>클릭해서 선택해보세요!</span>
					)}
				</SkillList>
				<Button onClick={onClearSkill} color="gray_33" bgColor="white_ff">
					초기화
				</Button>
			</SkillCardHeader>
			<SkillGrid>
				{skillDatas.map(({ name, SkillIcon }) => (
					<SkillItem
						key={name}
						onClick={onSelectSkill(name)}
						active={skills.indexOf(name) >= 0}
					>
						<SkillIcon width="50px" height="50px" />
						<SkillName>{name}</SkillName>
					</SkillItem>
				))}
			</SkillGrid>
		</>
	)
}

export default SkillsCard
