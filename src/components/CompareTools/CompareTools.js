import React from 'react';

import Aux from '../../hoc/Aux';
import CompareFeatures from './CompareFeatures/CompareFeatures';
import CompareFilters from './CompareFilters/CompareFilters';

const compareTools = ( props ) => {
console.log(props)
	return (
		<Aux>
			<CompareFilters
				filters={props.selectedFilters}
				toggleFilter={props.updateFilterHandler} />
			<CompareFeatures features={props.selectedFeatures} />
		</Aux>
	)
}

export default compareTools;