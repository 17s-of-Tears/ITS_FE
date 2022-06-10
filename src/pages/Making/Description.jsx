import React from 'react'
import { DescriptionBox } from './Description.styled'

const Description = () => (
	<DescriptionBox>
		<div className="description__title">
			<span>📙 팀의 설명을 입력해주세요!</span>
			<span className="description__title-sub">
				공백없이 최대 200자 이내로 입력해주세요!
			</span>
		</div>

		<hr />

		<textarea
			type="text"
			placeholder="팀의 설명을 입력해주세요!"
			className="description__content"
		></textarea>
	</DescriptionBox>
)
export default Description
