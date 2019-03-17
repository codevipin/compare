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

class compareFilters extends Component {

		state = {
			filters :[
				{
					id: 'general',
					value: 'GENERAL',
					checked: true
				},
				{
					id: 'OS_processor',
					value: 'OS & Processor Features',
					checked: true
				},
				{
					id: 'camera_features',
					value: 'Camera Features',
					checked: true
				},
				{
					id: 'display_features',
					value: 'Display Features',
					checked: true
				},
				{
					id: 'other_details',
					value: 'Other Details',
					checked: true
				},
				{
					id: 'power_features',
					value: 'Power Features',
					checked: true
				}
			]
		};

		handleChange = index => event => {
			console.log(event.target.checked)
			const updatedFilter = [...this.state.filters];
			updatedFilter[index].checked = event.target.checked;
			this.setState({ filter: updatedFilter });
		};
	
	render() {
		const { classes } = this.props;
		return (
	      <FormGroup>
	      	{
		        this.state.filters.map((filter, index) => {
		        	return (
		        		<FormControlLabel
				          control={
				            <Checkbox
				              checked={filter.checked}
				              onChange={this.handleChange(index)}
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
}

compareFilters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(compareFilters);
