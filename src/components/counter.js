import React, {useState} from 'react';
import Text from './text';
import Button from './button';
import './counter.css';

const Counter = ({initialValue=0}) =>{
let [count, setCount]=useState(initialValue);
    return(
    <div>
        <Text value={"Counter App"}
        style={{fontSize:'24px', fontWeight:'bold'}}/>

        <Text value={`Value of counter is: ${count}`}
        style={{fontSize:'28px'}}/>
        
        <Button value={'Increment'}
            className='btn-inc'
            onClick={()=>setCount(count+1)}/>

        <Button value={'Decrement'}
            className='btn-dec'
            onClick={()=>setCount(count-1)}/>
    </div>
    )
} 

export default Counter;