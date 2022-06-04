import { team } from '.'

export const createTeamAPI = data => team.post('/create', data)
