import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CompareTools from '../../components/CompareTools/CompareTools';
import CompareBrands from '../../components/CompareBrands/CompareBrands';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CompareBuilder extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container>
					<Grid item xs={4}>
						<CompareTools />
					</Grid>
					<Grid item xs={8}>
						<CompareBrands />
					</Grid>
				</Grid>
			</div>
		)
	}
}

CompareBuilder.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CompareBuilder);