import {FETCH_SOLUTION_START, FETCH_SOLUTION_SUCCESS, FETCH_SOLUTION_FAILURE} from '../actions';

const initialState = {
    solution: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SOLUTION_START:
            return{
                ...state,
                solution: '',
                isFetching: true,
                error: ''
            }
        case FETCH_SOLUTION_SUCCESS:
            return{
                ...state,
                solution: action.payload,
                isFetching: false,
                error: ''
            }
        default:
            return state;
    }
}