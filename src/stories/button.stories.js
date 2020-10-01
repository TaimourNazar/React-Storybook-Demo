import React from 'react';
import Button from '../components/button';

export default{
    title: "Button",
    component: Button
}

export const BtnLg = ()=>(
    <Button value={"Button Large"}
        style={{padding:'10px 100px', background:'lightblue'}}
        onClick={()=> alert("Clicked!")}/>
)

export const BtnMd = ()=>(
    <Button value={"Button Medium"}
        style={{padding:'10px 50px', background:'lightgreen'}}
        onClick={()=> alert("Clicked!")}/>
)

export const BtnSm = ()=>(
    <Button value={"Button Small"}
        style={{padding:'10px 30px', background:'red'}}
        onClick={()=> alert("Clicked!")}/>
)