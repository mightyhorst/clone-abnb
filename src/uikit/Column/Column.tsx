import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './Column.css';

/**
 * @requires Components
 */
import {ColumnContainer} from './ColumnContainer';

/**
 * @interface IColumn
 */
interface IColumn{
    children: React.ReactNode;
}
interface IColumnVariant extends IColumn{
    variant?: 'full' | 'third' | 'two-thirds' | 'half' | 'quarter' | 'three-quarters';
}

/**
 * @function Column
 * @param {IColumn} props - children, variant
 */
export function Column({children, variant = 'full'}: IColumnVariant){
    const className = clsx('Column', variant);
    return (<>
        <aside className={className}>
            {children}
        </aside>
    </>);
}

/**
 * @variants
 */
function ColHalf({children}: IColumn){
    return (
        <Column variant='half'>
            {children}
        </Column>
    );
}
function ColThird({children}: IColumn){
    return (
        <Column variant='third'>
            {children}
        </Column>
    );
}
function ColTwoThirds({children}: IColumn){
    return (
        <Column variant='two-thirds'>
            {children}
        </Column>
    );
}
function ColQuarter({children}: IColumn){
    return (
        <Column variant='quarter'>
            {children}
        </Column>
    );
}
function ColThreeQuarters({children}: IColumn){
    return (
        <Column variant='three-quarters'>
            {children}
        </Column>
    );
}

/**
 * @exports Compound component
 */
Column.Container = ColumnContainer;
Column.Half = ColHalf;
Column.Third = ColThird;
Column.TwoThirds = ColTwoThirds;
Column.Quarter = ColQuarter;
Column.ThreeQuarters = ColThreeQuarters;
