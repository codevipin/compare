import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

const compareFilters = ( props ) => {
	
	const { classes } = props;
	console.log(props)
	return (
      <FormGroup>
      	{
	        props.filters.map((filter, index) => {
	        	return (
	        		<FormControlLabel
			          control={
			            <Checkbox
			              checked={filter.checked}
			              onChange={(event) => props.toggleFilter(index, event.target.checked)}
			              value={filter.value}
			            />
			          }
			          key={filter.id}
			          label={filter.value}
			          color="primary"
			        />
	        	)
	        })
      	}
      </FormGroup>
    );
}

compareFilters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(compareFilters);
