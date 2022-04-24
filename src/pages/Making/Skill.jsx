import React from 'react'
import { ReactComponent as ReactLogoIcon } from 'assets/svg/React.svg'
import { ReactComponent as NodeLogoIcon } from 'assets/svg/Node.svg'
import { makingChoiceSkill } from 'lib/staticData'

const Skill = () => (
	<>
		<span className="box__skill_txt1">
			📗 언어 / 라이브러리 를 선택해주세요!
		</span>
		<span className="box__skill_txt2">복수로 선택할 수 있어요!</span>
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
	</>
)
export default Skill
