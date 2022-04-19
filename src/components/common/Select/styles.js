import styled from 'styled-components'

export const SelectContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.select__left {
		width: 22%;
		display: flex;
		gap: 10px;
		.select__kind {
			width: 100%;
			padding: 4%;
		}
		.select__lang {
			width: 100%;
			padding: 4%;
		}
	}
	.select__right {
		width: 7%;
		.select__line {
			width: 100%;
			height: auto;
			padding: 11%;
		}
	}
`
