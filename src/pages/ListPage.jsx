import AppLayout from '@/components/layouts/AppLayout'
import ListFilter from '@/components/list/ListFilter'
import CardBox from '@/components/list/CardBox'

const ListPage = () => (
	<AppLayout>
		<ListFilter />
		<CardBox />
	</AppLayout>
)

export default ListPage
