import { ReactComponent as MemberIcon } from '@/assets/svg/member.svg'
import { ReactComponent as MembersIcon } from '@/assets/svg/members.svg'
import { ReactComponent as LikeIcon } from '@/assets/svg/like.svg'

export const menus = [
	{
		to: '/host',
		name: '팀 만들기'
	},
	{
		to: '/list',
		name: '팀 리스트'
	}
]

export const successInfo = [
	'모집중인 팀에 등록을 하셔야 팀에대한 정보가 공개적으로 노출돼요',
	'다른 사용자가 모집중인 팀페이지를 통해 팀가입 요청을 하면 팀에 초대를 할 수 있어요',
	'지금 등록 안해도 마이페이지 안에 내 팀 메뉴를 통해서 언제든지 등록할 수 있어요',
	'모집이 완료되면 모집중인 팀을 비활성화 할 수 있으며, 언제든지 활성화 할 수 있어요'
]

export const homeDoneData = [
	{
		name: 'Member',
		Icon: MemberIcon,
		text: '누적 스터디 멤버',
		data: '10000',
		info: '(2022년 04월 01일 기준)'
	},
	{
		name: 'Members',
		Icon: MembersIcon,
		text: '누적 스터디 개설 수',
		data: '3000',
		info: '(2022년 04월 01일 기준)'
	},
	{
		name: 'Liker',
		Icon: LikeIcon,
		text: '스터디 평균 만족도',
		data: '4.5',
		info: '(스터디, 프로젝트 만족도 평균)'
	}
]
