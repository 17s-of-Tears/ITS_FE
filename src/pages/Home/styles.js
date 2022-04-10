import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
	justify-content: space-between;
	align-items: center;
	padding: 150px 278px 100px 278px;
	.home__intro {
        display:flex;
        justify-content: space-between;
	    align-items: center;
    }
	.home__intro_txt {
        font-size: 42px;
		color: ${colors.gray_33};
		font-family: Noto Sans, Noto Sans KR;
        span {
	        font-weight: 600;
        }
	}
    .home__intro_plat {
        display:flex;
        gap:10px;
    }
    .home__intro_stxt {
        font-size: 20px;
        color: ${colors.gray_77};
        margin-top: 20px;
    }
    .home__intro_stxt2 {
        font-size: 20px;
        color: ${colors.primary};
    }
    .home__intro_btn {
        display: flex;
        background-color: ${colors.primary};
        font-size: 20px;
		color: white;
        border-radius: 8px;
		padding: 8px 12px;
        margin-top: 20px;
		font-family: Noto Sans, Noto Sans KR;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			filter: brightness(80%);
		}
        a{
            text-decoration: none;
            color: white;
        }
    }

    .home__result {
        margin-top: 100px;
	    align-items: center;
    }
    .home__result_txt {
        font-size: 42px;
		color: ${colors.gray_33};
		font-family: Noto Sans, Noto Sans KR;
        
    }
    .home__result_txt2 {
        font-size: 32px;
        span {
            font-weight:600;
        }
    }
    .home__result_plat {
        display: flex;
        gap: 10px;
    }
    .home__result_stxt {
        font-size: 20px;
    }
    .home__result_img {
        display: flex;
        justify-content: space-evenly;
	    text-align: center;
        margin-top: 100px;
    }
    .home__result_txt3 {
        font-size: 42px;
		color: ${colors.gray_55};
        font-weight:600;
        margin-top: 15px;
        span {
            font-size: 20px;
            color: ${colors.gray_aa};
        }
    }
    .home__result_txt4 {
        color: ${colors.gray_55};
        font-size: 20px;
        margin-top: 15px;
    }
    .blank {
        margin-top:150px;
    }

    .home__footer {
        margin-top: 150px;
        align-items: center;
	    padding: 20px 278px;
        font-size: 20px;
        color: ${colors.gray_70};
        text-align: center;
        background-color: white;
    }
`
