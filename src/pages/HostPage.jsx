import HostLayout from '@/components/layouts/HostLayout'
import HostCard from '@/components/host/HostCard'
import { useSelector } from 'react-redux'
import Success from '@/components/host/Success'
import Description from '@/components/host/Description'

const cardDatas = [
	{ title: '📕 팀의 목적을 선택해주세요!', subTitle: '클릭해서 선택해주세요!' },
	{
		title: '📗 언어 / 라이브러리 를 선택해주세요!',
		subTitle: '클릭해서 선택해주세요!'
	},
	{ title: '📘 팀의 이름을 정해주세요!', subTitle: '클릭해서 선택해주세요!' },
	{ title: '📙 팀의 설명을 입력해주세요!', subTitle: '클릭해서 선택해주세요!' },
	{ title: '📕 팀의 목적을 선택해주세요!', subTitle: '클릭해서 선택해주세요!' }
]

const HostPage = () => {
	const { hostPageNum } = useSelector(state => state.host)
	const { title, subTitle } = cardDatas[hostPageNum]

	return (
		<HostLayout>
			{hostPageNum === 4 ? (
				<Success />
			) : (
				<HostCard title={title} subTitle={subTitle}>
					Test
				</HostCard>
			)}
		</HostLayout>
	)
}

export default HostPage
