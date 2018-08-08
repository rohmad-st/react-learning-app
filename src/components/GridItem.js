import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridListTile,
  GridListTileBar,
  IconButton,
  ButtonBase
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@material-ui/icons';

export default class GridItem extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    addAsFavorite: PropTypes.func.isRequired,
  }

  render () {
    const { product, classes, addAsFavorite } = this.props

    return (
      <GridListTile key={product.image} spacing={36} className={classes.gridItem}>
        <ButtonBase className={classes.image}>
          <img src={product.image} alt={product.title} className={classes.img} />
        </ButtonBase>
        <GridListTileBar
          className={classes.gridContent}
          title={product.title}
          subtitle={<span>by: {product.authors}</span>}
          actionIcon={
            <IconButton className={classes.icon} onClick={() => addAsFavorite(product.id)}>
              {
                (product.is_favorite)
                ? <FavoriteIcon className={classes.favoriteButton} />
                : <FavoriteBorderIcon />
              }
            </IconButton>
          }
        />
      </GridListTile>
    )
  }
}
