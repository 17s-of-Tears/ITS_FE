import React from 'react'
import { FooterContainer } from './style'

const Footer = () => {
	const nowYear = () => new Date().getFullYear()

	return (
		<FooterContainer>
			<p>Copyright &copy; {nowYear()}. It study All Rights Reserved.</p>
		</FooterContainer>
	)
}

export default Footer
