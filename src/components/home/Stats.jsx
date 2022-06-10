import React from 'react'
import { homeDoneData } from '@/constant/staticData'
import { StatsContainer } from './Stats.styled'

const Stats = () => {
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
				{homeDoneData.map(v => (
					<div key={v.id} className="stats__content-data">
						<v.Icon className="stats__content-data-icon" />
						<span className="stats__content-data-main">{v.text}</span>
						<span className="stats__content-data-sub">
							{v.name !== 'Liker' ? (
								`${v.data
									.toLocaleString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}+`
							) : (
								<>
									{v.data}
									<span className="stats__content-data-small">/ 5.0</span>
								</>
							)}
						</span>
						<span className="stats__content-data-info">{v.info}</span>
					</div>
				))}
			</div>
		</StatsContainer>
	)
}

export default Stats
