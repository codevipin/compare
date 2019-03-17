import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BrandCard from './BrandCard/BrandCard';
import SelectBrand from './SelectBrand/SelectBrand';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const CompareBrands = ( props ) => {
	const { classes } = props;
	const brands = [
		{
			id: 'google',
			name: 'Google'
		},
		{
			id: 'aiek',
			name: 'AIEK'
		},
		{
			id: 'i_life',
			name: 'I Life'
		},
		{
			id: 'meizu',
			name: 'Meizu'
		},
	];
	const products = [
		{
			id: 'xyz',
			name: 'XYZ'
		},
		{
			id: 'abc',
			name: 'ABC'
		},
		{
			id: 'www',
			name: 'WWWW'
		},
		{
			id: 'rrr',
			name: 'RRRR'
		},
	];
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item>
					
					<SelectBrand brands={brands} products={products} />
				</Grid>	
			</Grid>
		</div>
	)
}

export default withStyles(styles)(CompareBrands);