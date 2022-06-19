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
import useModal from '@/hooks/useModal'
import MyDataModal from '../modal/MyDataModal'

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
					<UserAvatar
						src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`}
						alt="profileImg"
						onClick={onTogglePopupUpened}
					/>
					{popupOpened && (
						<UserPopUp>
							<PopupMenu onClick={onClickMyData}>내 정보</PopupMenu>
							<PopupMenu onClick={onLogout}>로그아웃</PopupMenu>
						</UserPopUp>
					)}
				</UserButtonWrapper>
			) : (
				<Button onClick={onOpenLoginModal}>로그인 | 회원가입</Button>
			)}
			<MyDataModalPortal>
				<MyDataModal onCloseMyDataModal={onCloseMyDataModal} />
			</MyDataModalPortal>
		</>
	)
}

export default HeaderUserButton
