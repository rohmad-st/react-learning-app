import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { GridList } from '@material-ui/core';
import GridItem from './GridItem'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridList: {
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    overflowY: 'auto',
  },
  gridItem: {
    padding: 10,
  },
  gridContent: {
    background: '#34495e',
    color: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image: {
    width: 320,
  },
  img: {
    width: '100%',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  favoriteButton: {
    color: '#c23616'
  }
});

const TitlebarGridList = (store) => {
  const { filteredProducts, actions, classes } = store
  return (
    <div className={classes.root}>
      {
        (!filteredProducts || filteredProducts.length <= 0) &&
          <h1>No data found.</h1>
      }
      <GridList className={classes.gridList} cols={4} align="scretch">
        {
          filteredProducts.map((product, index) =>
            <GridItem
              key={index.toString()}
              product={product}
              classes={classes}
              {...actions}
            >
            </GridItem>
          )
        }
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  filteredProducts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default withStyles(styles)(TitlebarGridList)
