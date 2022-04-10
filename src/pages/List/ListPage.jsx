import React from 'react'
import { MainContainer } from './styles'

const ListPage = () => (
	<MainContainer>
		<div className="list__filter">
			<div className="list__filter_txt">
				<p>검색 필터</p>
				<p className="list__filter_stxt">| Filter</p>
			</div>
			<div className="list__filter_box">
				<div>
					<select>
						<option>지역</option>
					</select>
					<select>
						<option>종류</option>
					</select>
					<select>
						<option>언어</option>
					</select>
				</div>
				<div>
					<select>
						<option>최신순</option>
					</select>
				</div>
			</div>
		</div>
		<div className="list__join">
			<div className="list__join_txt">
				<p>총 100개의 팀</p>
				<p className="list__join_stxt">
					관심있는 팀에 댓글을 남겨 팀에 참여해 보세요!
				</p>
			</div>
			<div className="list__join_pro">
				<div className="list__join_box">
					<p>프로젝트</p>
					<p>같이 팀 프로젝트하실 분 구해요!</p>
					<p>2022-04-01</p>
					<p>댓글10 조회수100</p>
				</div>
				<div className="list__join_box">
					<p>프로젝트</p>
					<p>같이 팀 프로젝트하실 분 구해요!</p>
					<p>2022-04-01</p>
					<p>댓글10 조회수100</p>
				</div>
				<div className="list__join_box">
					<p>프로젝트</p>
					<p>같이 팀 프로젝트하실 분 구해요!</p>
					<p>2022-04-01</p>
					<p>댓글10 조회수100</p>
				</div>
				<div className="list__join_box">
					<p>프로젝트</p>
					<p>같이 팀 프로젝트하실 분 구해요!</p>
					<p>2022-04-01</p>
					<p>댓글10 조회수100</p>
				</div>
			</div>
		</div>
	</MainContainer>
)

export default ListPage
