import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Its from '../its'
import { MainContainer } from './styles'


const HomePage = () => {
    const location = useLocation()

	const menus = useMemo(
		() => [
			{ id: 1, name: '서비스 시작하기 ▶', to: '/list' },
		],
		[]
	)
    return (
        <MainContainer>
            <div className='home__intro'>
                <div className='home__intro_txt'>
                    <p>쉽고 간편하게</p>
                    <p><span>스터디</span>와 <span>프로젝트 팀</span>을 구할 수 있는</p>
                    <p className='home__intro_plat'><span>온라인 스터디 매칭 플랫폼 </span> <Its /></p>
                    <p className='home__intro_stxt'><span className='home__intro_stxt2'>이츠</span>로 함께 할 팀원을 찾아보세요!</p>
                    <button className='home__intro_btn'>
                        {menus.map(menu => (
                            <Link
                                key={menu.id}
                                to={menu.to}
                                className={location.pathname === menu.to ? 'current__page' : null}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </button>
                </div>
                <img src="images/logo.png" />
                <img src="images/logo.png" />
            </div>

            <div className='blank'>
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
                <img src="images/logo.png" />
            </div>

            <div className='home__result'>
                <div className='home__result_txt'>
                    <p className='home__result_txt2'>총<span>10,000명</span>의 사람들이</p>
                    <p className='home__result_plat'><Its />에서 스터디를 진행했어요.</p>
                    <p className='home__result_stxt'>(2020년 4월 1일 기준)</p>
                </div>
                <div className='home__result_img'>
                    <div>
                        <img src="images/logo.png" />
                        <p className='home__result_txt3'>10,000+</p>
                        <p className='home__result_txt4'>누적 스터디 멤버 수</p>
                    </div>
                    <div>
                        <img src="images/logo.png" />
                        <p className='home__result_txt3'>3500+</p>
                        <p className='home__result_txt4'>누적 스터디 개설 수</p>
                    </div>
                    <div>
                        <img src="images/logo.png" />
                        <p className='home__result_txt3'>4.5<span>/5.0</span></p>
                        <p className='home__result_txt4'>스터디 평균 만족도</p>
                    </div>
                </div>
            </div>

            <div className='home__footer'>
                <p>Copyright ⓒ 2020. It study All Rights Reserved.</p>
            </div>
        </MainContainer>
    )
}
export default HomePage
