import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PageHeader.css';
import './PageHeader.responsive.css';

/**
 * @requires Components
 */
import {PageHeaderLeft} from './PageHeaderLeft';
import {PageHeaderRight} from './PageHeaderRight';

/**
 * @interface IPageHeader
 * @description PageHeader props types
 */
export interface IPageHeader{
    children?: React.ReactNode;
}

/**
 * @function PageHeader
 * @param props - props for children 
 * @returns {PageHeader}
 */
export function PageHeader({children}: IPageHeader){
    /**
     * @constant className - build the css classes to add to the PageHeader
     */
    const className = clsx(
        'PageHeader',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}

PageHeader.Left = PageHeaderLeft;
PageHeader.Right = PageHeaderRight;
