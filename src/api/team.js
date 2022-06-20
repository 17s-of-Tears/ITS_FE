import { team } from '.'

//* 모든 팀 조회 API
export const getTeamListAPI = () => team.get('/')

//* 상세 팀 조회 API
export const getTeamAPI = id => team.get(`/${id}`)

//* 총 팀의 갯수 조회 API
export const getTeamTotalAPI = () => team.get('/totalteam')

//* 조회수 증가 API
export const incViewCountAPI = id => team.post('hits', { id })

//* 팀 생성 API
export const createTeamAPI = data => team.post('/create', data)
