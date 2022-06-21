import { homeDoneData } from '@/constant/homeData'
import { getTeamTotalRequest } from '@/store/team/team.actions'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StatsContainer } from './Stats.styled'

const Stats = () => {
	const dispatch = useDispatch()
	const { total } = useSelector(state => state.team)

	useEffect(() => {
		dispatch(getTeamTotalRequest())
	}, [dispatch])

	return (
		<StatsContainer>
			<div className="stats__title">
				<span>
					이미 <span className="stats__title-bold">10,000명</span>의 사람들이
				</span>
				<span>
					<span className="stats__title-primary">It&apos;s</span>&nbsp;에서 함께
					해왔어요.
				</span>
			</div>
			<div className="stats__content">
				{homeDoneData.map(({ name, data, text, info, Icon }) => (
					<div key={name} className="stats__content-data">
						<Icon className="stats__content-data-icon" />
						<span className="stats__content-data-main">{text}</span>
						<span className="stats__content-data-sub">
							{name === 'Member' && '10000+'}
							{name === 'Members' && total}
							{name === 'Liker' && (
								<>
									{data}
									<span className="stats__content-data-small">/ 5.0</span>
								</>
							)}
						</span>
					</div>
				))}
			</div>
		</StatsContainer>
	)
}

export default Stats
