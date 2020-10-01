import React from 'react';
import Text from '../components/text';

export default{
    title: "Text",
    component: Text
}

export const TextLg = ()=>(
    <Text value={"Text Large"}
        style={{fontSize: '32px'}}/>
)

export const BtnMd = ()=>(
    <Text value={"Text Medium"}
        style={{fontSize: '24px'}}/>
)

export const BtnSm = ()=>(
    <Text value={"Text Small"}
        style={{fontSize: '16px'}}/>
)