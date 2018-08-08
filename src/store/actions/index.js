import * as types from '../constants/ActionTypes'

export const addAsFavorite = id => ({ type: types.ADD_AS_FAVORITE, id })
export const removeAsFavorite = id => ({ type: types.REMOVE_AS_FAVORITE, id })
