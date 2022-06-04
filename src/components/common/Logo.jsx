import { Link } from 'react-router-dom'
import { LogoContainer, LogoIcon } from './Logo.styled'

//* noLink: true 일 때 클릭 동작 방지
const Logo = ({ noLink }) => (
	<LogoContainer noLink={noLink}>
		<Link to="/">
			<LogoIcon width="35" height="35" />
			<span>It&apos;s</span>
		</Link>
	</LogoContainer>
)

export default Logo
