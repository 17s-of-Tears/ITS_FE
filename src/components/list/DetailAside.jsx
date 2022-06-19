import { useState } from 'react'

import { ReactComponent as HeartIcon } from '@/assets/svg/fill_heart.svg'
import { ReactComponent as ShareIcon } from '@/assets/svg/sharing.svg'
import { DetailAsideContainer } from './DetailAside.styled'

const DetailAside = () => {
	const [isLiker, setIsLiker] = useState(false)
	const onChangeKiker = () => setIsLiker(prev => !prev)

	return (
		<DetailAsideContainer>
			<div className="detailaside__btn">
				<div className="detailaside__btn-state">모집중</div>
				<div className="detailaside__btn-liker" onClick={onChangeKiker}>
					<HeartIcon
						className={`detailaside__btn-liker-icon${isLiker ? '-fill' : ''}`}
					/>
					<span>{isLiker ? '1개' : '0개'}</span>
				</div>
				<div className="detailaside__btn-sharing">
					<ShareIcon />
					공유
				</div>
			</div>

			<div className="detailaside__title">
				<div className="detailaside__title-rectangle" />
				<span>
					<span className="detailaside__title-bold">호수님!</span> 이런 팀은
					어떨까요?
				</span>
			</div>
			<div className="detailaside__content">
				<span>📌 &nbsp;같이 팀프로젝트 하실분 구해요!</span>
				<span>📌 &nbsp;같이 팀프로젝트 하실분 구해요!</span>
				<span>📌 &nbsp;같이 팀프로젝트 하실분 구해요!</span>
				<span>📌 &nbsp;같이 팀프로젝트 하실분 구해요!</span>
			</div>
		</DetailAsideContainer>
	)
}

export default DetailAside
