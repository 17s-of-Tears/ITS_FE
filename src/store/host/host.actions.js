import * as types from './host.types'

// 비동기 액션

// 동기 액션
export const prevHostPageAction = () => ({ type: types.PREV_HOST_PAGE })
export const nextHostPageAction = () => ({ type: types.NEXT_HOST_PAGE })
export const clearHostPageAction = () => ({ type: types.CLEAR_HOST_PAGE })
