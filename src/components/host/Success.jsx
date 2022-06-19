import React from 'react'
import { SuccessContainer } from './Success.styled'

const Success = () => {
	return (
		<SuccessContainer>
			<img src="/images/success.png " width={'250px'} height={'250px'} />

			<h2 className="success__title">
				팀원을 구하기위해 <span>모집중인 팀</span>에 등록해보세요!
			</h2>

			<div className="success__content">
				<span>
					🔎 &nbsp;모집중인 팀에 등록을 하셔야 팀에대한 정보가 공개적으로
					노출돼요
				</span>
				<span>
					🔎 &nbsp;다른 사용자가 모집중인 팀페이지를 통해 팀가입 요청을 하면
					팀에 초대를 할 수 있어요
				</span>
				<span>
					🔎 &nbsp;지금 등록 안해도 마이페이지 > 내 팀 메뉴를 통해서 언제든지
					등록할 수 있어요
				</span>
				<span>
					🔎 &nbsp;모집이 완료되면 모집중인 팀을 비활성화 할 수 있으며, 언제든지
					활성화 할 수 있어요
				</span>
			</div>
		</SuccessContainer>
	)
}

export default Success
