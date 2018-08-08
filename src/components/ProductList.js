import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductActions from '../store/actions'
import { getAllProducts } from '../store/selectors'
import GridList from './GridList'

const mapStateToProps = (state, ownProps) => {
  return ({
    filteredProducts: getAllProducts({
      products: state.products,
      statusFilter: ownProps.filter
    }),
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    actions: bindActionCreators(ProductActions, dispatch),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList)
