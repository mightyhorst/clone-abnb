import React from 'react';
import './CardList.css';

import {CardListItem} from './CardListItem';

interface ICardList{
    children: React.ReactNode;
}
export function CardList(props: ICardList){
    return (<>
        <ul className='CardList'>
            {props.children}
        </ul>
    </>);
}

/**
 * @exports Compound components
 */
CardList.Item = CardListItem;
