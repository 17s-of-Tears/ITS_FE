import { ReactComponent as Member } from '@/assets/svg/member.svg'
import { ReactComponent as Members } from '@/assets/svg/members.svg'
import { ReactComponent as Like } from '@/assets/svg/like.svg'

export const homeMenus = [
	{ id: 1, name: '팀 찾기', to: '/list' },
	{ id: 2, name: '커뮤니티', to: '/post' },
	{ id: 3, name: '마이 페이지', to: '/my/4/home' }
]

export const myPageMenus = [
	{ id: 1, name: '내 팀', to: './home', info: 'home' },
	{ id: 2, name: '내 작성글', to: './board', info: 'board' },
	{ id: 3, name: '좋아요한 팀', to: './liker', info: 'liker' }
]

export const teamPageMenus = [
	{ id: 1, name: '팀 페이지', to: './home', info: 'home' },
	{ id: 2, name: '팀 메모장', to: './memo', info: 'memo' },
	{ id: 3, name: '팀 채팅', to: './chat', info: 'chat' }
]

export const teamPageNotice = [
	{ id: 1, name: '이츠 프로젝트 공지사항1' },
	{ id: 1, name: '이츠 프로젝트 공지사항2' },
	{ id: 1, name: '이츠 프로젝트 공지사항3' },
	{ id: 1, name: '이츠 프로젝트 공지사항4' },
	{ id: 1, name: '이츠 프로젝트 공지사항5' },
	{ id: 1, name: '이츠 프로젝트 공지사항6' }
]

export const teamPageMembers = [
	{ id: 1, name: '오호수 1' },
	{ id: 2, name: '오호수 2' },
	{ id: 3, name: '오호수 3' },
	{ id: 4, name: '오호수 4' },
	{ id: 5, name: '오호수 5' }
]

export const teamMenus = [{ id: 1, name: '팀 페이지 이동', to: '/team/4/home' }]

export const memoContentBox = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

export const memoContents = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 }
]

//* host page
export const hostTitle = [
	'팀 목적 정하기',
	'기술 선택하기',
	'팀이름 정하기',
	'팀 설명 입력하기',
	'팀을 성공적으로 만들었습니다!'
]

export const hostLink = [
	{ prev: '/', next: '/making/skill' },
	{ prev: '/making/purpose', next: '/making/name' },
	{ prev: '/making/skill', next: '/making/description' },
	{ prev: '/making/name', next: '/making/success' },
	{ prev: '/', next: '/list' }
]

export const skillLink = [
	{ prev: '', next: '/making/choice/skillnext' },
	{ prev: '/making/choice/skillprev', next: '' }
]

export const successInfo = [
	'모집중인 팀에 등록을 하셔야 팀에대한 정보가 공개적으로 노출돼요',
	'다른 사용자가 모집중인 팀페이지를 통해 팀가입 요청을 하면 팀에 초대를 할 수 있어요',
	'지금 등록 안해도 마이페이지 안에 내 팀 메뉴를 통해서 언제든지 등록할 수 있어요',
	'모집이 완료되면 모집중인 팀을 비활성화 할 수 있으며, 언제든지 활성화 할 수 있어요'
]

export const homeDoneData = [
	{
		id: 1,
		name: 'Member',
		Icon: Member,
		text: '누적 스터디 멤버',
		data: '10000',
		info: '(2022년 04월 01일 기준)'
	},
	{
		id: 2,
		name: 'Members',
		Icon: Members,
		text: '누적 스터디 개설 수',
		data: '3000',
		info: '(2022년 04월 01일 기준)'
	},
	{
		id: 3,
		name: 'Liker',
		Icon: Like,
		text: '스터디 평균 만족도',
		data: '4.5',
		info: '(스터디, 프로젝트 만족도 평균)'
	}
]
