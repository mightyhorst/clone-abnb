import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DetailsPageHeader.css';
import './DetailsPageHeader.responsive.css';

/**
 * @requires Components
 */
import {DetailsPageHeaderLeft} from './DetailsPageHeaderLeft';
import {DetailsPageHeaderRight} from './DetailsPageHeaderRight';

/**
 * @interface IDetailsPageHeader
 * @description DetailsPageHeader props types
 */
export interface IDetailsPageHeader{
    children?: React.ReactNode;
}

/**
 * @function DetailsPageHeader
 * @param props - props for children 
 * @returns {DetailsPageHeader}
 */
export function DetailsPageHeader({children}: IDetailsPageHeader){
    /**
     * @constant className - build the css classes to add to the DetailsPageHeader
     */
    const className = clsx(
        'DetailsPageHeader',
    );
    return (<>
        <div className={className}>
            <DetailsPageHeaderLeft />
            <DetailsPageHeaderRight />
        </div>
    </>);
}

DetailsPageHeader.Left = DetailsPageHeaderLeft;
DetailsPageHeader.Right = DetailsPageHeaderRight;
