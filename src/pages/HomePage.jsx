import Intro from '@/components/home/Intro'
import Content from '@/components/home/Content'
import Stats from '@/components/home/Stats'
import AppLayout from '@/components/layouts/AppLayout'
import ServiceModal from '@/components/modal/ServiceModal'
import useModal from '@/hooks/useModal'
import ConfirmModal from '@/components/modal/ConfirmModal'

const HomePage = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<>
			<AppLayout>
				<Intro onOpenModal={onOpenModal} />
				<Content />
				<Stats />
			</AppLayout>
			<ModalPortal>
				<ServiceModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	)
}
export default HomePage
