import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const globalStyle = css`
	${reset};
	* {
		box-sizing: border-box;
	}
	body {
		max-width: 1920px;
		min-width: 1440px;
		line-height: 1.4;
		font-family: Noto Sans, Noto Sans KR;
		color: #333;
		textarea {
			resize: none;
		}
	}
	button {
		text-decoration: none;
		border: 0;
		cursor: pointer;
	}
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
