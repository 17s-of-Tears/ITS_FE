import { useDispatch, useSelector } from 'react-redux'

import useToggle from '@/hooks/useToggle'
import { removeCookie } from '@/utils/cookie'
import { logoutRequest } from '@/store/user/user.actions'
import useModal from '@/hooks/useModal'
import {
	BottomArrow,
	PopupHeader,
	PopupMenu,
	UserAvatar,
	UserButtonWrapper,
	UserInfo,
	UserName,
	UserPopUp
} from './HeaderUserButton.styled'
import MyDataModal from '../modal/MyDataModal'
import Button from './Button'
import { memo } from 'react'

const HeaderUserButton = ({ onOpenLoginModal }) => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)

	const {
		ModalPortal: MyDataModalPortal,
		onCloseModal: onCloseMyDataModal,
		onOpenModal: onOpenMyDataModal
	} = useModal()

	const [popupOpened, onTogglePopupUpened] = useToggle(false)

	const onClickMyData = () => {
		onTogglePopupUpened()
		onOpenMyDataModal()
	}

	const onLogout = () => {
		dispatch(logoutRequest())
		removeCookie('auth')
		onTogglePopupUpened()
	}

	return (
		<>
			{me ? (
				<UserButtonWrapper>
					<UserInfo onClick={onTogglePopupUpened}>
						<UserName>
							{me.nickname}님
							<BottomArrow className={popupOpened && 'active'} />
						</UserName>
						<UserAvatar
							src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`}
							alt="profileImg"
							isHover
						/>
					</UserInfo>
					{popupOpened && (
						<UserPopUp>
							<PopupHeader>
								<UserAvatar
									src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`}
									alt="profileImg"
								/>
								안녕하세요
								<br />
								{me.nickname} 님
							</PopupHeader>
							<div>
								<PopupMenu onClick={onClickMyData}>내 정보</PopupMenu>
								<PopupMenu onClick={onLogout}>로그아웃</PopupMenu>
							</div>
						</UserPopUp>
					)}
				</UserButtonWrapper>
			) : (
				<Button onClick={onOpenLoginModal} py={10} px={14}>
					로그인 | 회원가입
				</Button>
			)}
			<MyDataModalPortal>
				<MyDataModal onCloseMyDataModal={onCloseMyDataModal} />
			</MyDataModalPortal>
		</>
	)
}

export default memo(HeaderUserButton)
