export const FETCH_SOLUTION_START = 'FETCH_SOLUTION_START';
export const FETCH_SOLUTION_SUCCESS = 'FETCH_SOLUTION_SUCCESS';
export const FETCH_SOLUTION_FAILURE = 'FETCH_SOLUTION_FAILURE';

export const getSolution = (operation, expression) => dispatch => {
    dispatch({type: FETCH_SOLUTION_START});
    fetch(`https://newton.now.sh/${operation}/${expression}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        dispatch({type: FETCH_SOLUTION_SUCCESS, payload: data.result});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_SOLUTION_FAILURE, payload: err.response});
    })
}