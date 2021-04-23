import React from 'react';
import './CardTitle.css';

interface ICardTitle{
    subTitle: string;
    title: string; 
}
export function CardTitle(props: ICardTitle){
    return (
        <header className='CardTitle'>
            <h3>{props.subTitle}</h3>
            <h2>{props.title}</h2>
        </header>
    );
}
