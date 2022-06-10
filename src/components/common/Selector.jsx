import { ReactComponent as BottomArrowIcon } from '@/assets/svg/bottom_arrow.svg'
import { StyledSelector } from './Selector.styled'

const Selector = ({ options = [], disabledOption = '', icon, ...props }) => {
	return (
		<StyledSelector>
			<select {...props}>
				<option value={disabledOption} disabled>
					{disabledOption}
				</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			{icon && <BottomArrowIcon />}
		</StyledSelector>
	)
}

export default Selector
