import { createSelector } from 'reselect'
import {
  SHOW_ALL,
  SHOW_FAVORITE,
  SHOW_UNFAVORITE
} from '../constants/ProductFilters'

const getStatusFilter = state => state.statusFilter
const getProducts = state => state.products

export const getAllProducts = createSelector(
  [getStatusFilter, getProducts],
  (statusFilter, products) => {
    // console.log('getAllProducts reducers!', { statusFilter, products })
    switch (statusFilter) {
      case SHOW_ALL:
        return products
      case SHOW_FAVORITE:
        return products.filter(product => product.is_favorite)
      case SHOW_UNFAVORITE:
        return products.filter(product => !product.is_favorite)
      default:
        throw new Error(`Unknown filter: ${statusFilter}`)
    }
  }
)
