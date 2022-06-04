import { useState } from 'react'

import { ReactComponent as HeartIcon } from 'assets/svg/fill_heart.svg'
import { ReactComponent as ShareIcon } from 'assets/svg/sharing.svg'
import { DetailAsideContainer } from './DetailAside.styled'

const DetailAside = () => {
	const [isLiker, setIsLiker] = useState(false)
	const onChangeKiker = () => setIsLiker(prev => !prev)

	return (
		<DetailAsideContainer>
			<div className="aside-box">
				<div>모집중</div>
				<div className="aside-box__liker" onClick={onChangeKiker}>
					<HeartIcon className={`aside-box__icon${isLiker ? '--fill' : ''}`} />
					1개
				</div>
				<div className="aside-box__share-group">
					<ShareIcon />
					공유
				</div>
			</div>
			<span>호수님! 이런 팀은 어떨까요?</span>
			<span>📌 같이 팀프로젝트 하실분 구해요!</span>
		</DetailAsideContainer>
	)
}

export default DetailAside
