import { useDispatch, useSelector } from 'react-redux'

import useToggle from '@/hooks/useToggle'
import { removeCookie } from '@/utils/cookie'
import { logoutRequest } from '@/store/user/user.actions'
import Button from './Button'
import {
	PopupMenu,
	UserAvatar,
	UserButtonWrapper,
	UserPopUp
} from './HeaderUserButton.styled'
import { useEffect } from 'react'

const HeaderUserButton = ({ onOpenModal }) => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)

	const [popupOpened, onTogglePopupUpened] = useToggle(false)

	const onLogout = () => {
		dispatch(logoutRequest())
		removeCookie('auth')
		onTogglePopupUpened()
	}

	return (
		<>
			{me ? (
				<UserButtonWrapper>
					<UserAvatar
						src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`}
						alt="profileImg"
						onClick={onTogglePopupUpened}
					/>
					{popupOpened && (
						<UserPopUp>
							<PopupMenu>내 정보</PopupMenu>
							<PopupMenu onClick={onLogout}>로그아웃</PopupMenu>
						</UserPopUp>
					)}
				</UserButtonWrapper>
			) : (
				<Button onClick={onOpenModal}>로그인 | 회원가입</Button>
			)}
		</>
	)
}

export default HeaderUserButton
