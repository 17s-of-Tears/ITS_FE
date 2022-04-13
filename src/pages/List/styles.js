import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	.list__filter {
		border-bottom: 1px solid ${colors.gray_ea};
		padding: 50px 278px 50px 278px;
	}
	.list__filter_txt {
		align-items: center;
		display: flex;
		font-size: 42px;
		font-weight: 500;
		gap: 10px;
	}
	.list__filter_stxt {
		font-size: 24px;
		color: ${colors.gray_aa};
	}
	.list__filter_box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.list__join_txt {
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		gap: 7px;
		.list__join_stxt {
			font-size: 14px;
			color: ${colors.gray_aa};
		}
	}
`
