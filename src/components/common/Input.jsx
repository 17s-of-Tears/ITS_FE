import { InputContainer } from './Input.styled'

const Input = ({ ...props }) => (
	<InputContainer>
		<div className="input-wrapper">
			<input {...props} />
		</div>
	</InputContainer>
)

export default Input
