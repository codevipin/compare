import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Navigation from '../Navigation/Navigation';

const layout = ( props ) => {
	return (
		<Aux>
			<Navigation />
			<main className={classes.Content}>
				{props.children}
			</main>
		</Aux>
	)
}

export default layout;