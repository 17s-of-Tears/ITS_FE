import Logo from 'components/common/Logo'
import React, { Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MakingPageRouterConfig from 'router/maketeam'
import { MainContainer, Progress } from './styles'

const MakingPage = () => {
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
		navigate('/making/4/purpose')
	}

	return (
		<MainContainer>
			<Logo />
			<span>TITLE</span>
			<div className="progress">
				<Progress width={`${(count / 5) * 100}%`} />
			</div>
			<div className="box">
				<Suspense fallback={<span>Loading...</span>}>
					<MakingPageRouterConfig />
				</Suspense>
			</div>
			<div className="btn">
				<button
					className="beforebtn"
					onClick={() => {
						MinusCount()
					}}
				>
					홈으로 돌아가기
				</button>
				<button className="nextbtn" onClick={AddCount}>
					다음 단계로 넘어가기
				</button>
			</div>
		</MainContainer>
	)
}

export default MakingPage
