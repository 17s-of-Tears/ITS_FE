import React, { Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import { myPageMenus } from '@/constant/staticData'
import MyPageRouterConfig from '@/router/mypage'
import { MyPageContainer } from './index.styled'

const MyPage = () => {
	const { pathname } = useLocation()

	return (
		<AppLayout>
			<MyPageContainer>
				<p className="my__profile_its">MY It&apos;s</p>
				<div className="my__profile">
					<div className="my__profile_left">
						<div className="my__profile_inform">
							<img src="/images/user.png" alt="11"></img>
							<p className="my__profile_txt1">Profile Image</p>
							<p className="my__profile_txt2">
								<span>이츠</span> 사람들에게 사진을 통해 자신을 알려주세요!
							</p>
							<div className="my__profile_imgbtn">
								<button className="my__profile_imgsbtn">이미지 선택</button>
								<button className="my__profile_imgdbtn">이미지 삭제</button>
							</div>
							<p className="my__profile_nick">닉네임</p>
							<input
								type="text"
								placeholder="호수"
								className="my__profile_nickbox"
							></input>
							<div className="my__profile_nickbtn">
								<button className="my__profile_nickch">변경 완료</button>
								<button className="my__profile_die">회원 탈퇴</button>
							</div>
						</div>
						<div className="menus">
							{myPageMenus.map(menu => (
								<Link
									key={menu.id}
									to={menu.to}
									className={`my__profile_team ${
										menu.info === pathname.substring(6) ? 'active' : ''
									}`}
								>
									{menu.name}
								</Link>
							))}
						</div>
					</div>
					<div className="my__profile_right">
						<Suspense fallback={<span>Loading...</span>}>
							<MyPageRouterConfig />
						</Suspense>
					</div>
				</div>
			</MyPageContainer>
		</AppLayout>
	)
}

export default MyPage
