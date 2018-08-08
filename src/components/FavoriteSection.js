import React from 'react'
import PropTypes from 'prop-types'
import ProductList from './ProductList'

const FavoriteSection = ({ actions }) => {
  return (
    <div>
      <ProductList caption="List of favorite products" {...actions}/>
    </div>
  )
}

FavoriteSection.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default FavoriteSection