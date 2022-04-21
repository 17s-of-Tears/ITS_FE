import { useState } from 'react'
import { MainContainer, Progress } from './styles'

const ProgressBar = () => {
	const [count, setCount] = useState(0)

	const AddCount = () => {
		if (count === 5) {
			setCount(0)
		} else {
			setCount(count + 1)
		}
	}

	return (
		<MainContainer
			onClick={() => {
				AddCount()
			}}
		>
			<Progress width={`${(count / 5) * 100}%`} />
		</MainContainer>
	)
}

export default ProgressBar
