import {
	GoalCardContainer,
	GoalCardItem,
	GoalDescription,
	GoalImage,
	GoalTextGroup,
	GoalTitle
} from './GoalCard.styled'

const GoalCard = ({ goal, setGoal }) => {
	const onChangeGoal = goal => () => setGoal(goal)

	return (
		<GoalCardContainer>
			<GoalCardItem
				active={goal === 'project'}
				onClick={onChangeGoal('project')}
			>
				<GoalImage src="img/project.png" />
				<GoalTextGroup>
					<GoalDescription>
						같이 서비스를 만들 팀원을 구해보세요!
					</GoalDescription>
					<GoalTitle>팀 프로젝트</GoalTitle>
				</GoalTextGroup>
			</GoalCardItem>
			<GoalCardItem active={goal === 'study'} onClick={onChangeGoal('study')}>
				<GoalImage src="img/study.png" />
				<GoalTextGroup>
					<GoalDescription>함께 성장할 팀원을 모아보세요!</GoalDescription>
					<GoalTitle>스터디</GoalTitle>
				</GoalTextGroup>
			</GoalCardItem>
		</GoalCardContainer>
	)
}

export default GoalCard
