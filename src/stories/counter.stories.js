import React from 'react';
import Counter from '../components/counter';

export default {
    title: 'Counter',
    component: Counter
}

export const defaultCounter = () => (
    <Counter />
)

export const CounterStartswith10 = () => (
    <Counter initialValue={10}/>
)

