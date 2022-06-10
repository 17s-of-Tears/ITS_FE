import React from 'react'
import { NameBox } from './Name.styled'

const Name = () => {
	return (
		<NameBox>
			<span className="name__title">📘 팀의 이름을 정해주세요!</span>

			<hr />

			<input
				type="text"
				placeholder="팀 이름을 입력해주세요!"
				className="name__content"
			/>
		</NameBox>
	)
}
export default Name
