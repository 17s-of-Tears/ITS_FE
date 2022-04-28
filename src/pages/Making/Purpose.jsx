import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Progress } from './styles'

const Purpose = () => {
	const navigate = useNavigate()

	const [count, setCount] = useState(1)

	const AddCount = () => {
		if (count === 5) {
			setCount(5)
		} else {
			setCount(count + 1)
		}
		navigate('/making/4/skill')
	}
	const MinusCount = () => {
		if (count === 1) {
			setCount(1)
		} else {
			setCount(count - 1)
		}
		navigate('/')
	}

	return (
		<>
			<span className="making_title">팀 목적 정하기</span>
			<div className="progress">
				<Progress width={`${(count / 5) * 100}%`} />
			</div>
			<div className="box__purpose">
				<span className="box__purpose_txt1">📕 팀의 목적을 선택해주세요!</span>
				<span className="box__purpose_txt2">클릭해서 선택해주세요!</span>

				<hr />
				<div className="box__purpose_box">
					<div className="box__purpose_box1">
						<img src="/images/teampro.png" alt="1"></img>
						<span className="box__purpose_box_txt1">
							같이 서비스를 만들 팀원을 구해보세요!
						</span>
						<span className="box__purpose_box_txt2">팀 프로젝트</span>
					</div>
					<div className="box__purpose_box2">
						<img src="/images/study.png" alt="2"></img>
						<span className="box__purpose_box_txt1">
							함께 성장할 팀원을 모아보세요!
						</span>
						<span className="box__purpose_box_txt2">스터디</span>
					</div>
				</div>
			</div>
			<div className="btn">
				<button className="beforebtn" onClick={MinusCount}>
					홈으로 돌아가기
				</button>
				<button className="nextbtn" onClick={AddCount}>
					다음 단계로 넘어가기
				</button>
			</div>
		</>
	)
}
export default Purpose
