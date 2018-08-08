import React from 'react'
import PropTypes from 'prop-types'
import ProductList from './ProductList'
import { SHOW_ALL } from '../store/constants/ProductFilters'

const MainSection = ({ actions, match: { params } }) => {
  const filter = params.filter || SHOW_ALL
  return (
    <div>
      <ProductList filter={filter} {...actions}/>
    </div>
  )
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default MainSection