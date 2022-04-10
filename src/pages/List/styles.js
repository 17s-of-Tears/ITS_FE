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

	.list__join {
		padding: 50px 278px 50px 278px;
	}
	.list__join_txt {
		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		gap: 7px;
	}
	.list__join_stxt {
		font-size: 14px;
		color: ${colors.gray_aa};
	}
	.list__join_pro {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
	}
	.list__join_box {
		margin-top: 80px;
		padding: 30px;
		width: 320px;
		height: 320px;
		background-color: white;
		border: 1px solid ${colors.gray_ea};
		border-radius: 5px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}
`
