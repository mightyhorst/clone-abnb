import React from 'react';
import './Card.css';
import './Card.responsive.css';
import clsx from 'clsx';

import {CardContainer} from './CardContainer';
import {CardImage} from './CardImage';
import {CardTitle} from './CardTitle';
import {CardList} from './CardList';
import {CardFooter} from './CardFooter';

interface ICard{
    children: React.ReactNode;
    variant?: 'trips' | 'recent';
}
export function Card(props: ICard){

    /**
     * @constant className - build the css classes to add to the Card
     *  - it always has 'Card' class
     *  - if a "variant" is passed as a prop, it will add the name of that variant as a class
     *      e.g. "trips" or "recent"
     *  - if no variant is set, no class will be added
     */
    const className = clsx(
        'Card',
        props.variant, 
    );
    return (<>
        <article className={className}>
            {props.children}
        </article>
    </>);
}

/**
 * @exports compound components to make the declarative syntax easier
 */
Card.Container = CardContainer;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.List = CardList;
Card.Footer = CardFooter;