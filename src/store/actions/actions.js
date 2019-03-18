import * as actionTypes from './actionTypes';

const updatedBrandsArray = brands => {
	const updateArr = brands.map(brand => {
		return {
			name: brand.attributeValue,
			id: brand.attributeValue
		}
	})

	return updateArr;
}

export const updateFilter = ( filterIndex, flag ) => {
    return {
        type: actionTypes.TOOGLE_FILTER,
        index: filterIndex,
        flag: flag
    };
};

export const updateBrandsArr = brands => {
	return {
		type: actionTypes.FETCH_BRANDS,
		brands: updatedBrandsArray(brands)
	}
}


export const toogleFilter = ( index, flag ) => {
    return (dispatch, getState) => {
		dispatch(updateFilter(index, flag));
    }
};


export const fetchBrands = url => {
    return (dispatch) => {
        // dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
            	console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(updateBrandsArr(items)))
            // .catch(() => dispatch(itemsHasErrored(true)));
    };
}