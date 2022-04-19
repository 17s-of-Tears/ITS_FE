import { KindOptions, SkillOptions, LineOptions } from 'lib/staticData'
import React from 'react'
import { SelectContainer } from './styles'

const SelectBox = () => (
	<SelectContainer>
		<div className="select__left">
			<select className="select__kind">
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
			<select className="select__lang">
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
		<div className="select__right">
			<select className="select__line">
				{LineOptions.map(line => (
					<option key={line.id} value={line.value}>
						{line.name}
					</option>
				))}
			</select>
		</div>
	</SelectContainer>
)

export default SelectBox
