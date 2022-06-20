import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import Input from '@/components/common/Input'
import TextArea from '@/components/common/TextArea'
import GoalCard from '@/components/host/GoalCard'
import HostCard from '@/components/host/HostCard'
import SkillsCard from '@/components/host/SkillsCard'
import Success from '@/components/host/Success'
import ProgressBar from '@/components/host/ProgressBar'
import { hostCardDatas, hostPageDatas } from '@/constant/host'
import useInput from '@/hooks/useInput'
import { createTeamRequest } from '@/store/team/team.actions'
import {
	clearHostPageAction,
	nextHostPageAction,
	prevHostPageAction
} from '@/store/host/host.actions'
import { HostPageContainer } from './HostPage.styled'

const HostPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { me } = useSelector(state => state.user)
	const { hostPageNum } = useSelector(state => state.host)
	const { createTeamDone, createTeamError } = useSelector(state => state.team)

	const [goal, setGoal] = useState('project')
	const [skills, setSkills] = useState([])

	const [teamName, onChangeTeamName] = useInput('')
	const [teamDescription, onChangeTeamDescription] = useInput('')

	//* 각 스탭마다 해당하는 데이터 출력
	const { title, percent } = hostPageDatas[hostPageNum]
	const { cardTitle, cardSubTitle } = hostCardDatas[hostPageNum]

	const onMoveHomePage = useCallback(to => () => navigate(to), [navigate])

	//* 팀 생성 함수
	const onCreateTeam = useCallback(() => {
		const newTeamData = {
			goal,
			skills,
			teamName,
			teamDescription
		}
		dispatch(createTeamRequest(newTeamData))
	}, [dispatch, goal, skills, teamDescription, teamName])

	const onMovePage = useCallback(
		mode => () => {
			if (mode === 'prev')
				hostPageNum > 0 ? dispatch(prevHostPageAction()) : onMoveHomePage('/')
			else if (mode === 'next')
				if (hostPageNum === 1 && skills.length === 0)
					return toast.error('기술을 한가지 이상 선택해주세요!')
				else if (hostPageNum === 2 && teamName === '')
					return toast.error('팀 이름을 입력해주세요!')
				else if (hostPageNum === 2 && teamName.length > 12)
					return toast.error('12글자 이내로 작성해주세요!')
				else if (hostPageNum === 3) {
					if (teamDescription === '')
						return toast.error('팀 설명을 입력해주세요!')
					onCreateTeam()
					dispatch(nextHostPageAction())
				} else {
					hostPageNum < 4 ? dispatch(nextHostPageAction()) : onMoveHomePage('/')
				}
		},
		[
			dispatch,
			hostPageNum,
			onCreateTeam,
			onMoveHomePage,
			skills.length,
			teamDescription,
			teamName
		]
	)

	useEffect(() => {
		if (createTeamError) toast.error('에러가 발생했습니다!')
	}, [createTeamDone, createTeamError, dispatch])

	//* 호스트 페이지 초기화 (언마운트 시)
	useEffect(() => {
		return () => {
			dispatch(clearHostPageAction())
		}
	}, [dispatch])

	useEffect(() => {
		if (!me) {
			navigate('/', { replace: true })
			toast.error('로그인이 필요한 서비스 입니다!')
		}
	}, [me, navigate])

	return (
		me && (
			<HostPageContainer>
				<Logo />
				<h2 className="host__title">{title}</h2>
				<div className="host__content">
					<ProgressBar percent={percent} />
					{hostPageNum === 4 ? (
						<Success />
					) : (
						<HostCard title={cardTitle} subTitle={cardSubTitle}>
							{hostPageNum === 0 ? (
								<GoalCard goal={goal} setGoal={setGoal} />
							) : hostPageNum === 1 ? (
								<SkillsCard skills={skills} setSkills={setSkills} />
							) : hostPageNum === 2 ? (
								<Input
									value={teamName}
									onChange={onChangeTeamName}
									placeholder="팀 이름을 입력해주세요!"
								/>
							) : (
								hostPageNum === 3 && (
									<TextArea
										value={teamDescription}
										onChange={onChangeTeamDescription}
										placeholder={'팀의 설명을 입력해주세요!'}
									/>
								)
							)}
						</HostCard>
					)}
					<div className="host__button-group">
						{hostPageNum === 4 ? (
							<Button onClick={onMoveHomePage('/list')} fullSize py={12}>
								팀 리스트 이동
							</Button>
						) : (
							<>
								<Button
									onClick={onMovePage('prev')}
									bgColor="gray_ee"
									color="gray_33"
									fullSize
									py={12}
								>
									{hostPageNum === 0 ? '홈으로 돌아가기' : '전 단계로 돌아가기'}
								</Button>
								<Button
									onClick={onMovePage('next')}
									bgColor="primary"
									color="white"
									fullSize
									py={12}
								>
									{hostPageNum === 3 ? '팀 생성하기' : '다음 단계로 가기'}
								</Button>
							</>
						)}
					</div>
				</div>
			</HostPageContainer>
		)
	)
}

export default HostPage
