import { useMemo } from 'react'
import { FooterContainer } from './Footer.styled'

const Footer = () => {
	const nowYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<FooterContainer>
			<span>Copyright &copy; {nowYear}. It study All Rights Reserved.</span>
		</FooterContainer>
	)
}

export default Footer
