import React from 'react'
import { FooterContainer } from './style'

const Footer = () => {
	const nowYear = () => new Date().getFullYear()

	return (
		<FooterContainer>
			<span>Copyright &copy; {nowYear()}. It study All Rights Reserved.</span>
		</FooterContainer>
	)
}

export default Footer
