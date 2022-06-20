import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AppLayout from '@/components/layouts/AppLayout'
import ListFilter from '@/components/list/ListFilter'
import Card from '@/components/list/Card'
import { getTeamListRequest } from '@/store/team/team.actions'
import { CardGird, Divide, ListWrapper } from './ListPage.styled'

const ListPage = () => {
	const dispatch = useDispatch()
	const { teamList } = useSelector(state => state.team)

	useEffect(() => {
		dispatch(getTeamListRequest())
	}, [dispatch])

	return (
		<AppLayout>
			<ListFilter />
			<Divide />
			<ListWrapper>
				<div className="cardbox__title">
					<span className="cardbox__title-team">총 N개의 팀</span>
					<span className="cardbox__title-info">
						관심있는 팀에 댓글을 남겨 팀에 참여해 보세요!
					</span>
				</div>
				<CardGird>
					{teamList.map(data => (
						<Card key={data.id} {...data} />
					))}
				</CardGird>
			</ListWrapper>
		</AppLayout>
	)
}

export default ListPage
