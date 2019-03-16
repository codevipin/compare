import React from 'react';

import Aux from '../../hoc/Aux';
import CompareFeatures from './CompareFeatures/CompareFeatures';
import CompareFilters from './CompareFilters/CompareFilters';

const compareTools = ( props ) => {

	return (
		<Aux>
			<CompareFilters />
			<CompareFeatures />
		</Aux>
	)
}

export default compareTools;