import React from 'react';
import { useSelector } from 'react-redux';

function Screen1(props) {
    const name = useSelector(state => state.home.name)

    return  (
        <div>
        <h1>Hello, {name}</h1>
        </div>
    );
}

export default Screen1;