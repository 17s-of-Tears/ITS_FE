import { TextAreaContainer } from './TextArea.styled'

const TextArea = ({ ...props }) => (
	<TextAreaContainer>
		<div className="textarea-wrapper">
			<textarea {...props} />
		</div>
	</TextAreaContainer>
)

export default TextArea
