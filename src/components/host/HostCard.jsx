import { HostCardContainer } from './HostCard.styled'

const HostCard = ({ title, subTitle, children }) => {
	return (
		<HostCardContainer>
			<div className="host-card__header">
				<div className="host-card__title">{title}</div>
				<div className="host-card__sub-title">{subTitle}</div>
			</div>
			<hr />
			<div className="host-card__content">{children}</div>
		</HostCardContainer>
	)
}

export default HostCard
