import { ReactComponent as ArrowIcon } from '/public/svg/arrow.svg'
import { IntroContainer, ServiceButton } from './Intro.styled'

const Intro = ({ onOpenModal }) => {
	return (
		<IntroContainer>
			<div className="intro__left">
				<div className="intro__left-title">
					<span>쉽고 간편하게</span>
					<div>
						<span className="font--bold">스터디</span>와
						<span className="font--bold">프로젝트 팀</span>을 구할 수 있는
					</div>
					<div>
						<span className="font--bold">온라인 스터디 매칭 플랫폼</span>
						<span className="color--primary font--bold">It&apos;s</span>
					</div>
				</div>
				<div className="intro__left-label">
					<span className="color--primary">이츠</span>
					<span className="font--light">로 함께 할 팀원을 찾아보세요!</span>
				</div>
				<ServiceButton onClick={onOpenModal} className="home__main--title__btn">
					<span>서비스 시작하기</span>
					<ArrowIcon />
				</ServiceButton>
			</div>
			<div className="intro__right">
				<img src="images/intro.png" />
			</div>
		</IntroContainer>
	)
}

export default Intro
