import AppLayout from 'layouts/AppLayout'
import React from 'react'

import { ReactComponent as BackArrow } from 'assets/svg/back_arrow.svg'
import { ReactComponent as ReactIcon } from 'assets/svg/React.svg'
import { ReactComponent as NodeIcon } from 'assets/svg/Node.svg'

import { useNavigate } from 'react-router-dom'
import DetailAside from 'components/list/DetailAside'
import { SubContainer } from './styles'

const ListDetail = () => {
	const navigate = useNavigate()
	const onMoveToPage = () => navigate('/list')

	return (
		<AppLayout>
			<SubContainer>
				<div className="back" onClick={onMoveToPage}>
					<BackArrow />
				</div>
				<div className="detail">
					<div className="detail__content">
						<span className="detail__content__title">
							같이 팀 프로젝트 하실 분 구해요!
						</span>
						<span className="detail__content__subtitle">
							오호수 | 2022-04-01
						</span>
						<div className="detail__content__icon">
							<ReactIcon />
							<NodeIcon />
						</div>
						<hr />
						<div className="detail__content__write">
							<span>
								안녕하세요! 리액트 스터디 및 토이프로젝트 같이 해봐요~!
							</span>
							<span>
								스터디 : 리액트
								<br />
								진행: <br />
								1.초급 유데미 강의 듣기 (3-4주) 및 연습문제를 확장한 간단
								토이프로젝트로 (1주)
								<br /> 마무리- react boot camp 영어진행 (톡 주심 링크 드릴게요!)
								<br />
								2. 매주 한번씩 zoom미팅으로 질문 및 진도 확인 (리액트 개발자분께
								자문 가능)
							</span>
							<span>
								주의사항: 1.기본적인 js를 아시고 오심 좋아요!
								<br /> 2.하루 2~3시간(강의 1-2시간/ 자가공부 1-2시간) 공부가
								가능하신 분들이어야 <br />
								진도 맞추기가 가능할듯 해요!
							</span>
							<span>
								카톡주세요! <br />
								hosu123
							</span>
						</div>
						<hr />
						<div className="detail__content__comment">
							<span>총 2개의 댓글이 있어요</span>
							<textarea placeholder="호수님,댓글을 남겨보세요!" />
							<button className="detail__content__comment__registerbtn">
								댓글 등록하기
							</button>
						</div>
					</div>
					<DetailAside />
				</div>
			</SubContainer>
		</AppLayout>
	)
}
export default ListDetail
