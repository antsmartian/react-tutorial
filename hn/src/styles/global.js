import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
	* {
		box-sizing: border-box;
	}

	html, body {
		font-family: Lato, sans-serif;
		width: 100vw;
		overflow-x: hidden;
		margin: 0, 
		padding: 0
	}
`

export default GlobalStyles