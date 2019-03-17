import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import SelectDropdown from '../../../UI/SelectDropdown/SelectDropdown';


const styles = theme => ({
  card: {
    width: 350,
    minHeight: 350
  },
    formControl: {
    margin: theme.spacing.unit,
    minWidth: 220,
  },
});

class SelectBrand extends Component {

     state = {
      brand: '',
      product: ''
    }

    selectHandler = (selectedObj) => {
      console.log(selectedObj)
      this.setState({
        [selectedObj.name] : selectedObj.value
      })
    }
    
    render() {
      const { classes } = this.props;

      return (
        <Card className={classes.card}>
          <CardContent>
      			      <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="phone-brand">Select Brand</InputLabel>
                      <SelectDropdown
                        items={this.props.brands}
                        selectHandler={this.selectHandler}
                        selectFor="brand"
                        />
                    </FormControl>
                    {
                      this.state.brand ?
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="brand-product">Select Product</InputLabel>
                          <SelectDropdown
                            items={this.props.products}
                            selectHandler={this.selectHandler}
                            selectFor="product"
                            />
                      </FormControl> : null
                    }
                  </form>
          </CardContent>
        </Card>
      );
    }
}

SelectBrand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectBrand);
