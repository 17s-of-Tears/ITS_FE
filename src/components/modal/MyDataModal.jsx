import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import { uploadImgRequest } from '@/store/user/user.actions'
import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../common/Button'
import Input from '../common/Input'
import { MyDataModalContainer, UserAvatar } from './MyDataModal.styled'

const MyDataModal = ({ onCloseMyDataModal }) => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)

	const imageInput = useRef(null)

	const onClickImageUpload = () => imageInput.current.click()

	const onChangeImages = useCallback(
		event => {
			const imageFormData = new FormData()
			imageFormData.append('image', event.target.files[0])
			dispatch(uploadImgRequest(imageFormData))
		},
		[dispatch]
	)

	return (
		<MyDataModalContainer>
			<CloseIcon onClick={onCloseMyDataModal} />
			<UserAvatar src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`} />
			<span className="myprofile__img">Profile Image</span>
			<span className="myprofile__info">
				<span className="myprofile__info-pm">이츠</span> 사람들에게 사진을 통해
				자신을 알려주세요!
			</span>
			<div className="myprofile__btn">
				<input
					type="file"
					name="image"
					hidden
					ref={imageInput}
					onChange={onChangeImages}
				/>
				<Button onClick={onClickImageUpload}>이미지 선택</Button>
				<Button className="myprofile__btn-ee">이미지 삭제</Button>
			</div>
			<span className="myprofile__nick">{me.nickname}</span>
			<Input placeholder="변경할 닉네임을 입력해주세요!" />
			<div className="myprofile__btn">
				<Button>변경 완료</Button>
				<Button className="myprofile__btn-red">회원 탈퇴</Button>
			</div>
		</MyDataModalContainer>
	)
}

export default MyDataModal
