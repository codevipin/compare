import * as actionTypes from './actionTypes';

export const updateFilter = ( filterIndex, flag ) => {
    return {
        type: actionTypes.TOOGLE_FILTER,
        index: filterIndex,
        flag: flag
    };
};


export const toogleFilter = ( index, flag ) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(updateFilter(index, flag));
        }, 2000 );
    }
};