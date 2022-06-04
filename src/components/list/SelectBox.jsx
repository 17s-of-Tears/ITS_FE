import { KindOptions, SkillOptions, LineOptions } from '@/lib/staticData'
import { SelectBoxContainer } from './SelectBox.styled'

const SelectBox = () => (
	<SelectBoxContainer>
		<div className="select-left">
			<select className="select-left__kind">
				<option value="" selected disabled hidden>
					종류
				</option>
				<option>전체</option>
				{KindOptions.map(kind => (
					<option key={kind.id} value={kind.value}>
						{kind.name}
					</option>
				))}
			</select>
			<select className="select-left__lang">
				<option value="" selected disabled hidden>
					언어
				</option>
				<option>전체</option>
				{SkillOptions.map(skill => (
					<option key={skill.id} value={skill.value}>
						{skill.name}
					</option>
				))}
			</select>
		</div>
		<div className="select-right">
			<select className="select-right__line">
				{LineOptions.map(line => (
					<option key={line.id} value={line.value}>
						{line.name}
					</option>
				))}
			</select>
		</div>
	</SelectBoxContainer>
)

export default SelectBox
