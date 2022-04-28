import { makingChoiceSkill } from 'lib/staticData'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as ReactLogoIcon } from 'assets/svg/React.svg'
import { ReactComponent as NodeLogoIcon } from 'assets/svg/Node.svg'
import { Progress } from './styles'

const Purpose = () => {
	const navigate = useNavigate()

	const [count, setCount] = useState(2)

	const AddCount = () => {
		if (count === 5) {
			setCount(5)
		} else {
			setCount(count + 1)
		}
		navigate('/making/4/name')
	}
	const MinusCount = () => {
		if (count === 1) {
			setCount(1)
		} else {
			setCount(count - 1)
		}
		navigate('/making/4/purpose')
	}

	return (
		<>
			<span className="making_title">기술 선택하기</span>
			<div className="progress">
				<Progress width={`${(count / 5) * 100}%`} />
			</div>
			<div className="box__purpose">
				<span className="box__purpose_txt1">
					📗 언어 / 라이브러리 를 선택해주세요!
				</span>
				<span className="box__purpose_txt2">복수로 선택할 수 있어요!</span>

				<hr />

				<div className="box__skill">
					{makingChoiceSkill.map(choice => (
						<div key={choice.id} className="box__skill_box">
							<div className="box__skill_react">
								<ReactLogoIcon />
								<span className="box__skill_txt">react</span>
							</div>
							<div className="box__skill_node">
								<NodeLogoIcon />
								<span className="box__skill_txt">node.js</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="btn">
				<button className="beforebtn" onClick={MinusCount}>
					전 단계로 돌아가기
				</button>
				<button className="nextbtn" onClick={AddCount}>
					다음 단계로 넘어가기
				</button>
			</div>
		</>
	)
}
export default Purpose
