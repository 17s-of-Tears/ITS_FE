import React, { useState } from 'react'

const Purpose = () => (
	<>
		<div className="box">
			<div className="box__title">
				<span className="title__txt1">📘 팀의 이름을 정해주세요!</span>
			</div>

			<hr />

			<input
				type="text"
				placeholder="팀 이름을 입력해주세요!"
				className="box__name"
			></input>
		</div>
	</>
)
export default Purpose
