import React, { useState } from 'react'
import { ReactComponent as Home } from 'assets/svg/home.svg'
import { ReactComponent as Member } from 'assets/svg/member.svg'
import { ReactComponent as Members } from 'assets/svg/members.svg'
import { ReactComponent as Like } from 'assets/svg/like.svg'
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg'
import Modal from 'components/modal/Login'
import Its from '../its'
import { MainContainer } from './styles'

const HomePage = () => {
	const [isModal, setIsModal] = useState(false)

	const onOpenModal = () => {
		setIsModal(true)
	}
	const onCloseModal = () => setIsModal(false)

	return (
		<MainContainer>
			<div className="home__intro">
				<div className="home__intro_txt">
					<p>쉽고 간편하게</p>
					<p>
						<span>스터디</span>와 <span>프로젝트 팀</span>을 구할 수 있는
					</p>
					<p className="home__intro_plat">
						<span>온라인 스터디 매칭 플랫폼 </span> <Its />
					</p>
					<p className="home__intro_stxt">
						<span className="home__intro_stxt2">이츠</span>로 함께 할 팀원을
						찾아보세요!
					</p>

					<button onClick={onOpenModal} className="home__intro_btn">
						서비스 시작하기
						<Arrow className="home__btn_svg" />
					</button>
				</div>
				<Home />
			</div>

			<div className="home__result">
				<div className="home__result_txt">
					<p className="home__result_txt2">
						총<span>10,000명</span>의 사람들이
					</p>
					<p className="home__result_plat">
						<Its />
						에서 스터디를 진행했어요.
					</p>
					<p className="home__result_stxt">(2020년 4월 1일 기준)</p>
				</div>
				<div className="home__result_img">
					<div>
						<Member className="home__result_svg" />
						<p className="home__result_txt3">10,000+</p>
						<p className="home__result_txt4">누적 스터디 멤버 수</p>
					</div>
					<div>
						<Members className="home__result_svg" />
						<p className="home__result_txt3">3500+</p>
						<p className="home__result_txt4">누적 스터디 개설 수</p>
					</div>
					<div>
						<Like className="home__result_svg" />
						<p className="home__result_txt3">
							4.5<span>/5.0</span>
						</p>
						<p className="home__result_txt4">스터디 평균 만족도</p>
					</div>
				</div>
			</div>
			{isModal && <Modal onCloseModal={onCloseModal} />}
		</MainContainer>
	)
}
export default HomePage
