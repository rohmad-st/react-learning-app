import { combineReducers } from 'redux'
import products from './products'
import statusFilter from './statusFilter'

const rootReducer = combineReducers({
  products,
  statusFilter
})

export default rootReducer
