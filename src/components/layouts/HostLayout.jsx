import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '@/components/common/Logo'
import Button from '@/components/common/Button'
import ProgressBar from '@/components/host/ProgressBar'
import { hostPageData } from '@/constant/hostData'
import {
	clearHostPageAction,
	nextHostPageAction,
	prevHostPageAction
} from '@/store/host/host.actions'
import { HostLayoutContainer } from './HostLayout.styled'

const HostLayout = ({ children }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { hostPageNum } = useSelector(state => state.host)

	const onMovePage = mode => () => {
		if (mode === 'prev')
			hostPageNum > 0 ? dispatch(prevHostPageAction()) : navigate('/')
		else if (mode === 'next')
			hostPageNum < 4 ? dispatch(nextHostPageAction()) : navigate('/')
	}

	//* 호스트 페이지 초기화 (언마운트 시)
	useEffect(() => {
		return () => {
			dispatch(clearHostPageAction())
		}
	}, [dispatch])

	return (
		<HostLayoutContainer>
			<Logo />
			<h2 className="host__title">{hostPageData[hostPageNum].title}</h2>
			<div className="host__content">
				<ProgressBar percent={hostPageData[hostPageNum].percent} />
				{children}
				<div className="host__button-group">
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
						{hostPageNum === 4 ? '홈으로 돌아가기' : '다음 단계로 가기'}
					</Button>
				</div>
			</div>
		</HostLayoutContainer>
	)
}

export default HostLayout
