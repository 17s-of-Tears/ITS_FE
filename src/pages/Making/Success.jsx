import { successInfo } from 'lib/staticData'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Purpose = () => (
	<>
		<img className="success__img" src="/images/comp2.png" alt="111"></img>
		<span className="success__txt1">
			팀을 구하기 위해 <span className="success__txt2">모집중인 팀</span>에
			등록해보세요!
		</span>
		<div className="box">
			<div className="box__success">
				{successInfo.map((v, i) => (
					<span key={i}>🔎 {v}</span>
				))}
			</div>
		</div>
	</>
)

export default Purpose
