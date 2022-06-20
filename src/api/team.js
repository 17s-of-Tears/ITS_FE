import { team } from '.'

//* 모든 팀 조회 API
export const getTeamListAPI = () => team.get('/')

//* 상세 팀 조회 API
export const getTeamAPI = id => team.get(`/${id}`)

//* 팀 생성 API
export const createTeamAPI = data => team.post('/create', data)
