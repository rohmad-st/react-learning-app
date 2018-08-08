import Product from '../../models/product'
import {
  ADD_AS_FAVORITE,
  // REMOVE_AS_FAVORITE,
  // CLEAR_FAVORITED
} from '../constants/ActionTypes'
import data from '../../utils/data.js'

const initialState = [...data.items]

export default function products (state = initialState, action) {
  switch (action.type) {
    case ADD_AS_FAVORITE:
      return state.map(product => 
        product.id === action.id ? { ...product, is_favorite: !product.is_favorite } : product
      )
    
    default:
      return state.map((s) => Product.fromAPI(s))
  }
}