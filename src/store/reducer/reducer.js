import * as actionTypes from '../actions/actionTypes';

const initialState = {
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
	],
	brands: []
}

const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

const updateFilter = (state, action) => {
	console.log(action)
	const updatedFilter = [...state.filters];
	updatedFilter[action.index] = {
		...state.filters[action.index],
		checked: action.flag
	}
	return updateObject(state, { filters: updatedFilter });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
    	case actionTypes.TOOGLE_FILTER: return updateFilter(state, action);
    	case actionTypes.FETCH_BRANDS: return updateObject(state, {brands: action.brands})
    }
    return state;
};

export default reducer;