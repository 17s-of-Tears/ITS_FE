import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../common/Input'
import { MyDataModalContainer, UserAvatar } from './MyDataModal.styled'

const MyDataModal = ({ onCloseMyDataModal }) => {
	const dispatch = useDispatch()
	const { me } = useSelector(state => state.user)

	return (
		<MyDataModalContainer>
			<CloseIcon onClick={onCloseMyDataModal} />
			<UserAvatar src={me.isImg ? me.imgUrl : `svg/${me.imgUrl}.svg`} />
			<Input />
		</MyDataModalContainer>
	)
}

export default MyDataModal
