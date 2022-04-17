import styled from 'styled-components'
import colors from 'styles/colors'
// import colors from 'styles/colors'

export const SelectContainer = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	select {
		border-radius: 5px;
		border: solid 1px ${colors.gray_dd};
		padding-left: 15px;
	}
	.select__left {
		display: flex;
		gap: 10px;
		select {
			width: 150px;
			height: 44px;
			display: flex;
		}
	}
	.select__right {
		select {
			width: 102px;
			height: 44px;
		}
	}
`
