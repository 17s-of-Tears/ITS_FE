import { TextAreaContainer } from './TextArea.styled'

const TextArea = ({ ...props }) => (
	<TextAreaContainer>
		<textarea {...props} />
	</TextAreaContainer>
)

export default TextArea
