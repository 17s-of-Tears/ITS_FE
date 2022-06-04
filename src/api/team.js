import { team } from '.'

//* 팀 생성 API
export const createTeamAPI = data => team.post('/create', data)
