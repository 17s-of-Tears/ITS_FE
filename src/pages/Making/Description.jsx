import React, { useState } from 'react'

const Purpose = () => (
	<>
		<div className="box">
			<div className="box__title">
				<span className="title__txt1">📙 팀의 설명을 입력해주세요!</span>
				<span className="title__txt2">
					공백없이 최대 200자 이내로 입력해주세요!
				</span>
			</div>

			<hr />
			<textarea
				type="text"
				placeholder="팀의 설명을 입력해주세요!"
				className="box__description"
			></textarea>
		</div>
	</>
)
export default Purpose
