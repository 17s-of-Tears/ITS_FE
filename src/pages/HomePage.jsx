import ServiceModal from '@/components/modal/ServiceModal'
import Intro from '@/components/home/Intro'
import AppLayout from '@/layouts/AppLayout'
import useModal from '@/hooks/useModal'
import { homeDoneData } from '@/lib/staticData'
import { HomePageContainer } from './HomePage.styled'

const HomePage = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<AppLayout>
			<HomePageContainer>
				<Intro onOpenModal={onOpenModal} />
				<div className="home__content">
					<div className="home__content--study">
						<span>
							<span className="Its">lt&apos;s 스터디</span> <br />
							이츠에서 원하는 언어를 선택해 <br />
							스터디를 시작해 보세요
						</span>
						<img src="/images/logo.png" alt="home" />
					</div>
					<hr className="home__content--hr" />
					<div className="home__content--project">
						<img src="/images/logo.png" alt="home" />
						<span>
							<span className="Its">lt&apos;s 프로젝트</span> <br />
							이츠에서 팀을 만들거나
							<br />
							팀원으로 들어가서
							<br />
							프로젝트를 시작해 보세요
						</span>
					</div>
				</div>
				<div className="home__done">
					<div className="home__done--title">
						<span>
							이미 10,000명의 사람들이
							<br />
							<span className="Its">lt&apos;s에서 함께</span> 해왔어요.
						</span>
					</div>
					<div className="home__done--data">
						{homeDoneData.map(v => (
							<div key={v.id} className="data">
								<v.Icon />
								<span className="data__1">{v.text}</span>
								<span className="data__2">
									{v.name !== 'Liker' ? (
										`${v.data
											.toLocaleString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}+`
									) : (
										<>
											{v.data}
											<span className="data__2--small">/ 5.0</span>
										</>
									)}
								</span>
								<span className="data__3">{v.info}</span>
							</div>
						))}
					</div>
				</div>
				<ModalPortal>
					<ServiceModal onCloseModal={onCloseModal} />
				</ModalPortal>
			</HomePageContainer>
		</AppLayout>
	)
}
export default HomePage
