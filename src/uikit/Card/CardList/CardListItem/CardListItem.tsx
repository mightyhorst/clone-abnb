import React from 'react';
import './CardListItem.css';

interface ICardListItem{
    href: string;
    imgSrc: string;
    children: React.ReactNode;
}
export function CardListItem(props: ICardListItem){
    return (<>
        <li className='CardListItem'>
            <a href={props.href}>
                <img src={props.imgSrc} alt='thumbnail' />
                <span>
                    {props.children}
                </span>
                <i className="fa fa-chevron-right"></i>
            </a>
        </li>
    </>);
}
