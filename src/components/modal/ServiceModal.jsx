import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg'
import Logo from '@/components/common/Logo'
import { ServiceModalContainer } from './ServiceModal.styled'

const Modal = ({ onCloseModal }) => {
	const navigate = useNavigate()

	const onMovePageList = () => navigate('/list')
	const onMovePageMaking = () => navigate('/making/purpose')

	return (
		<ServiceModalContainer>
			<div className="modal__service">
				<button className="modal__service_close" onClick={onCloseModal}>
					<CloseIcon />
				</button>

				<div className="modal__service_logo">
					<Logo noLink />
				</div>
				<p className="modal__service_txt">
					이츠에서 같이 성장할 팀을 구해보세요!
				</p>

				<p className="modal__service_txt2">
					서비스를 이용하기 위해 스터디장 또는 스터디원을 선택해 주세요!
				</p>

				<div className="modal__service_both">
					<div className="modal__service_leader">
						<img
							className="modal__service_img"
							src="images/group1.png"
							alt="1"
						/>
						<p className="modal__service_txt">스터디장이신가요?</p>
						<p className="modal__service_txt2">팀페이지를 만들 수 있어요!</p>
						<button onClick={onMovePageMaking} className="modal__service_btn">
							스터디장으로 진행하기
						</button>
					</div>
					<div className="modal__service_member">
						<img
							className="modal__service_img"
							src="images/group2.png"
							alt="1"
						/>
						<p className="modal__service_txt">스터디원이신가요?</p>
						<p className="modal__service_txt2">
							모집중인 팀 페이지에서 팀을 찾아보세요!
						</p>
						<button onClick={onMovePageList} className="modal__service_btn">
							스터디원으로 참여하기
						</button>
					</div>
				</div>
			</div>
		</ServiceModalContainer>
	)
}

export default Modal
