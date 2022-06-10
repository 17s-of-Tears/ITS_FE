import React from 'react'

import { ReactComponent as SuccessIcon } from '@/assets/svg/success.svg'
import { successInfo } from '@/constant/staticData'
import { SuccessBox } from './Success.styled'

const Success = () => (
	<SuccessBox>
		<SuccessIcon />
		<span className="success__title">
			팀원을 구하기 위해{' '}
			<span className="success__title-primary">모집중인 팀</span>에
			등록해보세요!
		</span>
		<div className="success__content">
			<div className="success__content-text">
				{successInfo.map((v, i) => (
					<span key={i}>🔎 &nbsp;{v}</span>
				))}
			</div>
		</div>
	</SuccessBox>
)

export default Success
