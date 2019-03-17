import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class SelectDropdown extends Component {

	state = {
		item: '',
		open: false,
	};

	handleClose = () => {
      this.setState({ open: false });
    };

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleChange = (event) => {
      console.log(event.target);
      this.setState({
        item: event.target.value
      })
      this.props.selectHandler(event.target);
    }

    render() {
    	return (
			<Select
				open={this.state.open}
				onClose={this.handleClose}
				onOpen={this.handleOpen}
				value={this.state.item}
				onChange={this.handleChange}
				inputProps={{
				name: this.props.selectFor,
				id: 'select-' + this.props.selectFor,
			}}
			>
				{this.props.items.map( item => <MenuItem key={item.id} value={item.id}>{ item.name }</MenuItem> )}
			</Select>
    	)
    }
}

export default SelectDropdown;