import { useCallback, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from '@/components/common/Logo'
import MakingPageRouterConfig from '@/router/maketeam'
import { hostLink, hostTitle } from '@/constant/staticData'
import { ButtonWrapper, MainContainer, Progress } from './index.styled.js'

const MakingPage = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const routerData = useMemo(
		() => ({
			'/making/purpose': { title: hostTitle[0], to: hostLink[0], count: 1 },
			'/making/skill': { title: hostTitle[1], to: hostLink[1], count: 2 },
			'/making/name': { title: hostTitle[2], to: hostLink[2], count: 3 },
			'/making/description': { title: hostTitle[3], to: hostLink[3], count: 4 },
			'/making/success': { title: hostTitle[4], to: hostLink[4], count: 5 }
		}),
		[]
	)
	const buttonText = useCallback(
		mode => {
			const isPrev = mode === 'prev'
			const isNotPurposeAndSuccess =
				pathname !== '/making/purpose' && pathname !== '/making/success'
			return isNotPurposeAndSuccess
				? `${isPrev ? '전 단계로 돌아가기' : '다음 단계로 넘어가기'}`
				: pathname === '/making/purpose'
				? `${isPrev ? '홈으로 돌아가기' : '다음 단계로 넘어가기'}`
				: `${isPrev ? '홈으로 돌아가기' : '팀 등록 완료하기'}`
		},
		[pathname]
	)

	//* 해당 버튼에 이동할 경로를 정해주고 이동
	const onMoveToPage = mode => () => {
		const toPage = routerData[pathname].to[mode]
		// toPage === 'openModal' ? setIsModal(true) : navigate(toPage)
		toPage === 'openModal' ? console.log('test') : navigate(toPage)
	}

	return (
		<MainContainer>
			<Logo />
			<span className="making_title">{routerData[pathname].title}</span>
			<div className="progress">
				<Progress width={`${(routerData[pathname].count / 5) * 100}%`} />
			</div>

			<MakingPageRouterConfig />

			<ButtonWrapper>
				<button className="beforebtn" onClick={onMoveToPage('prev')}>
					{buttonText('prev')}
				</button>
				<button className="nextbtn" onClick={onMoveToPage('next')}>
					{buttonText('next')}
				</button>
			</ButtonWrapper>
		</MainContainer>
	)
}

export default MakingPage
