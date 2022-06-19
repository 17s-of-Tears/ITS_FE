import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '@/components/common/Logo'
import Button from '@/components/common/Button'
import ProgressBar from '@/components/host/ProgressBar'
import Success from '@/components/host/Success'
import HostCard from '@/components/host/HostCard'
import GoalCard from '@/components/host/GoalCard'
import SkillsCard from '@/components/host/SkillsCard'
import { hostCardDatas, hostPageDatas } from '@/constant/host'
import {
	clearHostPageAction,
	nextHostPageAction,
	prevHostPageAction
} from '@/store/host/host.actions'
import { HostPageContainer } from './HostPage.styled'
import { toast } from 'react-toastify'

const HostPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { hostPageNum } = useSelector(state => state.host)

	const [goal, setGoal] = useState('project')
	const [skills, setSkills] = useState([])

	//* 각 스탭마다 해당하는 데이터 출력
	const { title, percent } = hostPageDatas[hostPageNum]
	const { cardTitle, cardSubTitle } = hostCardDatas[hostPageNum]

	const onMoveHomePage = () => navigate('/')

	const onMovePage = mode => () => {
		if (mode === 'prev')
			hostPageNum > 0 ? dispatch(prevHostPageAction()) : onMoveHomePage()
		else if (mode === 'next')
			if (hostPageNum === 1 && skills.length === 0)
				return toast.error('기술을 한가지 이상 선택해주세요.')
		hostPageNum < 4 ? dispatch(nextHostPageAction()) : onMoveHomePage()
	}

	//* 호스트 페이지 초기화 (언마운트 시)
	useEffect(() => {
		return () => {
			dispatch(clearHostPageAction())
		}
	}, [dispatch])

	return (
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
							<GoalCard />
						) : (
							hostPageNum === 3 && <GoalCard />
						)}
					</HostCard>
				)}
				<div className="host__button-group">
					{hostPageNum === 4 ? (
						<Button onClick={onMoveHomePage} fullSize py={12}>
							홈으로 돌아가기
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
								다음 단계로 가기
							</Button>
						</>
					)}
				</div>
			</div>
		</HostPageContainer>
	)
}

export default HostPage
