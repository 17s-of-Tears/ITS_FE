import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as BackArrow } from '@/assets/svg/back_arrow.svg'
import AppLayout from '@/components/layouts/AppLayout'
import { skillDatas } from '@/constant/host'
import { getTeamRequest } from '@/store/team/team.actions'
import {
	DetailContainer,
	DetailTitle,
	DetailContent
} from './DetailPage.styled'

const ListDetail = () => {
	const dispatch = useDispatch()
	const { teamInfo } = useSelector(state => state.team)

	const navigate = useNavigate()
	const { id } = useParams()

	useEffect(() => {
		dispatch(getTeamRequest(id))
	}, [dispatch, id])

	const onMoveToPage = () => navigate('/list')

	const skillIcon = skill => skillDatas.find(e => e.name === skill)

	return (
		<AppLayout>
			<DetailContainer>
				<div className="listdetail__left">
					<div className="back" onClick={onMoveToPage}>
						<BackArrow />
					</div>
					<DetailTitle>
						<span className="detailtitle__title">{teamInfo?.teamName}</span>
						<div className="detailtitle__author">
							<span>닉네임</span>
							<span className="detailtitle__author-date">
								{teamInfo?.createDate}
							</span>
							<span>조회수 {teamInfo?.hits}</span>
						</div>
						<div className="detailtitle__icon">
							{teamInfo?.skills.map(skill => {
								const SkillIcon = skillIcon(skill).SkillIcon

								return <SkillIcon key={skill} width="45px" height="100%" />
							})}
						</div>
					</DetailTitle>
					<hr />
					<DetailContent>
						<div className="detailcontent__content">
							{teamInfo?.teamDescription}
						</div>
					</DetailContent>
					<hr />
				</div>
			</DetailContainer>
		</AppLayout>
	)
}
export default ListDetail
