import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './CardSimple.css';
import './CardSimple.responsive.css';

/**
 * @requires Components
 */
import {CardIcon} from './CardIcon';
import {CardTitle} from './CardTitle';
import {CardBody} from './CardBody';

/**
 * @interface ICardSimple
 * @description CardSimple props types
 */
export interface ICardSimple{
    children?: React.ReactNode;
}

/**
 * @function CardSimple
 * @param props - props for children 
 * @returns {CardSimple}
 */
export function CardSimple({children}: ICardSimple){
    /**
     * @constant className - build the css classes to add to the CardSimple
     */
    const className = clsx(
        'CardSimple',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}

/**
 * @exports Card compound
 */
CardSimple.Icon = CardIcon;
CardSimple.Title = CardTitle;
CardSimple.Body = CardBody;
