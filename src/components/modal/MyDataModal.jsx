import { memo, useCallback, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import {
	changeNicknameRequest,
	clearStateSuccessAction,
	deleteImgRequest,
	deleteUserRequest,
	logoutRequest,
	uploadImgRequest
} from '@/store/user/user.actions'
import useInput from '@/hooks/useInput'
import Button from '../common/Button'
import Input from '../common/Input'
import {
	ButtonGroup,
	MyDataModalContainer,
	NickNameForm,
	UserAvatar
} from './MyDataModal.styled'
import { removeCookie } from '@/utils/cookie'

const MyDataModal = ({ onCloseMyDataModal }) => {
	const dispatch = useDispatch()
	const { me, deleteUserDone } = useSelector(state => state.user)

	const imageInput = useRef(null)

	const [nickname, onChangeNickname] = useInput('')

	const onClickImageUpload = () => imageInput.current.click()

	const onChangeImages = useCallback(
		event => {
			const imageFormData = new FormData()
			imageFormData.append('image', event.target.files[0])
			dispatch(uploadImgRequest(imageFormData))
			onCloseMyDataModal()
		},
		[dispatch, onCloseMyDataModal]
	)

	const onClickDeleteImage = useCallback(() => {
		if (me.isImg === true) {
			dispatch(deleteImgRequest())
			onCloseMyDataModal()
		} else return toast.error('이미 기본이미지 사용 중 입니다!')
	}, [dispatch, me.isImg, onCloseMyDataModal])

	const onSubmitNickname = () => {
		dispatch(changeNicknameRequest({ nickname }))
		onCloseMyDataModal()
	}

	//* 회원탈퇴

	const onDeleteUser = useCallback(() => {
		me && dispatch(deleteUserRequest(me.id))
		onCloseMyDataModal()
	}, [dispatch, me, onCloseMyDataModal])

	return (
		<MyDataModalContainer>
			<CloseIcon onClick={onCloseMyDataModal} />
			<UserAvatar
				src={me.isImg ? me.imgUrl : `/svg/${me.imgUrl}.svg`}
				alt="image"
			/>
			<span className="myprofile__img">Profile Image</span>
			<span className="myprofile__info">
				<span className="myprofile__info-pm">이츠</span>
				사람들에게 사진을 통해 자신을 알려주세요!
			</span>
			<ButtonGroup>
				<input
					type="file"
					name="image"
					hidden
					ref={imageInput}
					onChange={onChangeImages}
				/>
				<Button onClick={onClickImageUpload} px={20}>
					이미지 선택
				</Button>
				<Button
					onClick={onClickDeleteImage}
					bgColor="gray_ee"
					color="#333"
					px={20}
				>
					이미지 삭제
				</Button>
			</ButtonGroup>
			<NickNameForm>
				<span className="myprofile__nick">닉네임</span>
				<Input
					value={nickname}
					onChange={onChangeNickname}
					placeholder={me.nickname}
				/>
			</NickNameForm>
			<ButtonGroup size="full">
				<Button onClick={onSubmitNickname} fullSize>
					변경 완료
				</Button>
				<Button onClick={onDeleteUser} className="myprofile__btn-red" fullSize>
					회원 탈퇴
				</Button>
			</ButtonGroup>
		</MyDataModalContainer>
	)
}

export default memo(MyDataModal)
