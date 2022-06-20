import { ContentContainer } from './Content.styled'

const Content = () => {
	return (
		<ContentContainer>
			<div className="content__top">
				<div className="content__title">
					<span className="content__title-primary">It&apos;s 스터디</span>
					<span>원하는 언어를 선택해</span>
					<span>여러 사람들과</span>
					<span>스터디를 시작해보세요</span>
				</div>
				<div className="content__img">
					<img src="images/intro1.png" alt="icon" />
				</div>
			</div>
			<div className="content__bottom">
				<div className="content__img">
					<img src="images/intro2.png" alt="icon" />
				</div>
				<div className="content__title">
					<span className="content__title-primary">It&apos;s 프로젝트</span>
					<span>팀을 만들거나</span>
					<span>팀원으로 들어가서</span>
					<span>프로젝트를 시작해보세요</span>
				</div>
			</div>
		</ContentContainer>
	)
}

export default Content
