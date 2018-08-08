import { SET_FAVORITE_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/ProductFilters'

const statusFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FAVORITE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default statusFilter