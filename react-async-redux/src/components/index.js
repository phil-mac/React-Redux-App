import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment} from '../actions';

export default () => {
    const count = useSelector(state => state.count);

    const dispatch = useDispatch();

    return(
        <div>
            <h1>Counter app</h1>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}></button>
        </div>
    )
}