import React, { useState } from 'react'

const Purpose = () => (
	<>
		<div className="box">
			<div className="box__title">
				<span className="title__txt1">📕 팀의 목적을 선택해주세요!</span>
				<span className="title__txt2">클릭해서 선택해주세요!</span>
			</div>
			<hr />
			<div className="box__purpose">
				<div className="purpose__box1">
					<img src="/images/teampro.png" alt="1"></img>
					<span className="purpose__txt1">
						같이 서비스를 만들 팀원을 구해보세요!
					</span>
					<span className="purpose__txt2">팀 프로젝트</span>
				</div>
				<div className="purpose__box2">
					<img src="/images/study.png" alt="2"></img>
					<span className="purpose__txt1">함께 성장할 팀원을 모아보세요!</span>
					<span className="purpose__txt2">스터디</span>
				</div>
			</div>
		</div>
	</>
)
export default Purpose
