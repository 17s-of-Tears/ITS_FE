import React, { useState } from 'react'

import { ReactComponent as Arrow } from '@/assets/svg/arrow.svg'
import Modal from '@/components/modal/ServiceModal'
import AppLayout from '@/layouts/AppLayout'
import { homeDoneData } from '@/lib/staticData'
import { MainContainer } from './styles'
import Button from '@/components/common/Button'

const HomePage = () => {
	const [isModal, setIsModal] = useState(false)

	const onOpenModal = () => setIsModal(true)
	const onCloseModal = () => setIsModal(false)

	return (
		<AppLayout>
			<MainContainer>
				<div className="home__main">
					<div className="home__main--title">
						<span className="home__main--title__main">
							쉽고 간편하게 <br />
							<span>스터디</span>와 <span>프로젝트 팀</span>을 구할 수 있는
							<br />
							<span>
								온라인 스터디 매칭 플랫폼 <span className="Its">lt&apos;s</span>
							</span>
						</span>
						<span className="home__main--title__sub">
							<span className="Its">이츠</span>로 함께 할 팀원을 찾아보세요!
						</span>
						<Button onClick={onOpenModal} className="home__main--title__btn">
							서비스 시작하기
							<Arrow />
						</Button>
					</div>
					<img src="/images/two.png" alt="home" />
				</div>
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
				{isModal && <Modal onCloseModal={onCloseModal} />}
			</MainContainer>
		</AppLayout>
	)
}
export default HomePage
