import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import CompareTools from '../../components/CompareTools/CompareTools';
import CompareBrands from '../../components/CompareBrands/CompareBrands';

class CompareBuilder extends Component {

	render() {
		return (
			<Aux>
				<CompareTools />
				<CompareBrands />
			</Aux>
		)
	}
}

export default CompareBuilder;