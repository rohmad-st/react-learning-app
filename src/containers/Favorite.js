import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductActions from '../store/actions'
import FavoriteSection from '../components/FavoriteSection'

const mapStateToProps = (state) => {
  return ({
    productsCount: state.products.length,
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
)(FavoriteSection)
