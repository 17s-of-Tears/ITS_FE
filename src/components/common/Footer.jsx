import { useMemo } from 'react'
import { FooterContainer } from './Footer.styled'

const Footer = () => {
	const nowYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<FooterContainer>
			<div className="footer-text">
				<span>Copyright &copy; {nowYear}. It study All Rights Reserved.</span>
			</div>
		</FooterContainer>
	)
}

export default Footer
