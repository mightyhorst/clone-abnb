import React from 'react';
import './CardImage.css';

interface ICardImage{
    imgSrc: string;
}
export function CardImage({imgSrc}: ICardImage){
    return (<>
        <img className='CardImage' src={imgSrc} />
    </>);
}
