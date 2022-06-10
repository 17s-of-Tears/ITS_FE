import { memo } from 'react'
import { PurposeBoxContainer, PurposeTextGroup } from './PurposeBox.styled'

const PurposeBox = ({ mode, selectedBox, onClickSelectBox }) => {
	return (
		<PurposeBoxContainer onClick={onClickSelectBox} selectedBox={selectedBox}>
			<img
				src={`/images/${mode === 'project' ? 'teampro.png' : 'study.png'}`}
				alt="icon"
			/>
			<PurposeTextGroup>
				<span className="purpose__text-info">
					{mode === 'project'
						? '같이 서비스를 만들 팀원을 구해보세요!'
						: '함께 성장할 팀원을 모아보세요!'}
				</span>
				<span>{mode === 'project' ? '팀 프로젝트' : '스터디'}</span>
			</PurposeTextGroup>
		</PurposeBoxContainer>
	)
}

export default memo(PurposeBox)
