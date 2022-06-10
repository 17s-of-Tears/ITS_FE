import { useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	SelectBoxContainer,
	SelectTextGroup,
	SelectButton
} from './SelectBox.styled'

const SelectBox = ({ mode, selectedBox, onClickSelectBox }) => {
	const navigate = useNavigate()

	const onMovePage = useCallback(
		() => (mode === 'host' ? navigate('/making/purpose') : navigate('/list')),
		[mode, navigate]
	)

	return (
		<SelectBoxContainer onClick={onClickSelectBox} selectedBox={selectedBox}>
			<img
				src={`images/${mode === 'host' ? 'group1.png' : 'group2.png'}`}
				alt="icon"
			/>
			<SelectTextGroup>
				<h2>{mode === 'host' ? '스터디장이신가요?' : '스터디원이신가요?'}</h2>
				<span>
					{mode === 'host'
						? '팀페이지를 만들 수 있어요!?'
						: '모집중인 팀 페이지에서 팀을 찾아보세요!?'}
				</span>
			</SelectTextGroup>
			{mode === 'host' ? (
				<SelectButton
					selectedBox={selectedBox}
					onClick={selectedBox ? onMovePage : onClickSelectBox}
				>
					스터디장으로 진행하기
				</SelectButton>
			) : (
				<SelectButton
					selectedBox={selectedBox}
					onClick={selectedBox ? onMovePage : onClickSelectBox}
				>
					스터디원으로 진행하기
				</SelectButton>
			)}
		</SelectBoxContainer>
	)
}

export default memo(SelectBox)
