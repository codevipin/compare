import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import CompareTools from '../../components/CompareTools/CompareTools';
import CompareBrands from '../../components/CompareBrands/CompareBrands';
import * as actions from '../../store/actions/actions';

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
						<CompareTools
							selectedFeatures="{this.props.selectedFeatures}"
							selectedFilters={this.props.selectedFilters}
							updateFilterHandler={this.props.onFilterToggle} />
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

const mapStateToProps = state => {
	console.log(state.filters)
    return {
        selectedFilters: state.filters,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFilterToggle: (index, flag) => dispatch(actions.toogleFilter(index, flag))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CompareBuilder));