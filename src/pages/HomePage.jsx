import ServiceModal from '@/components/modal/ServiceModal'
import Intro from '@/components/home/Intro'
import AppLayout from '@/layouts/AppLayout'
import useModal from '@/hooks/useModal'

import { HomePageContainer } from './HomePage.styled'
import Content from '@/components/home/Content'
import Stats from '@/components/home/Stats'

const HomePage = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<AppLayout>
			<HomePageContainer>
				<Intro onOpenModal={onOpenModal} />
				<Content />
				<Stats />
				<ModalPortal>
					<ServiceModal onCloseModal={onCloseModal} />
				</ModalPortal>
			</HomePageContainer>
		</AppLayout>
	)
}
export default HomePage
