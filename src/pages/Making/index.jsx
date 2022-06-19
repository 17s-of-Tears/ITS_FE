import { useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from '@/components/common/Logo'
import MakingPageRouterConfig from '@/router/maketeam'
import { hostLink, hostTitle } from '@/constant/staticData'
import { ButtonWrapper, MainContainer, Progress } from './index.styled.js'
import Purpose from './Purpose.jsx'
import Skill from './Skill.jsx'
import Name from './Name.jsx'
import Description from './Description.jsx'
import Success from './Success.jsx'

const MakingPage = () => {
	const [step, setStep] = useState(1)

	const [teamInfo, setTeamInfo] = useState({
		teamPurpose: 'project',
		teamSkills: [],
		teamName: '',
		teamDescripts: ''
	})
	const navigate = useNavigate()

	const nextPageButton = () => {
		setStep(prev => prev + 1)
		if (step > 4) {
			navigate('/list')
		}
	}
	const prevPageButton = () => {
		step === 1 ? navigate('/') : setStep(prev => prev - 1)
	}

	const buttonText = useCallback(
		mode => {
			const isPrev = mode === 'prev'
			const isNotPurposeAndSuccess = step !== 1 && step !== 5
			return isNotPurposeAndSuccess
				? `${isPrev ? '전 단계로 돌아가기' : '다음 단계로 넘어가기'}`
				: step === 1
				? `${isPrev ? '홈으로 돌아가기' : '다음 단계로 넘어가기'}`
				: `${isPrev ? '전 단계로 돌아가기' : '팀 등록 완료하기'}`
		},
		[step]
	)

	return (
		<MainContainer>
			<Logo />
			<span className="making_title">{hostTitle[step - 1]}</span>
			<div className="progress">
				<Progress width={`${(step / 5) * 100}%`} />
			</div>

			{step === 1 && <Purpose teamInfo={teamInfo} setTeamInfo={setTeamInfo} />}
			{step === 2 && <Skill teamInfo={teamInfo} setTeamInfo={setTeamInfo} />}
			{step === 3 && <Name teamInfo={teamInfo} setTeamInfo={setTeamInfo} />}
			{step === 4 && (
				<Description teamInfo={teamInfo} setTeamInfo={setTeamInfo} />
			)}
			{step === 5 && <Success teamInfo={teamInfo} setTeamInfo={setTeamInfo} />}

			<ButtonWrapper>
				<button
					className="beforebtn"
					onClick={() => {
						prevPageButton()
					}}
				>
					{buttonText('prev')}
				</button>
				<button
					className="nextbtn"
					onClick={() => {
						nextPageButton()
					}}
				>
					{buttonText('next')}
				</button>
			</ButtonWrapper>
		</MainContainer>
	)
}

export default MakingPage
