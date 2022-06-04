import React, { useState } from 'react'

import { ReactComponent as ReactLogoIcon } from '@/assets/svg/React.svg'
import { ReactComponent as NodeLogoIcon } from '@/assets/svg/Node.svg'
import { makingChoiceSkill } from '@/lib/staticData'

const Purpose = () => (
	<>
		<div className="box">
			<div className="box__title">
				<span className="title__txt1">
					📗 언어 / 라이브러리 를 선택해주세요!
				</span>
				<span className="title__txt2">복수로 선택할 수 있어요!</span>
			</div>

			<hr />

			<div className="box__skill">
				{makingChoiceSkill.map(choice => (
					<div key={choice.id} className="skill__box">
						<div className="skill__react">
							<ReactLogoIcon />
							<span className="skill__txt">react</span>
						</div>
						<div className="box__skill_node">
							<NodeLogoIcon />
							<span className="skill__txt">node.js</span>
						</div>
					</div>
				))}
			</div>
		</div>
	</>
)
export default Purpose
