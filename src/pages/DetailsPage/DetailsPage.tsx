import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './DetailsPage.css';
import './DetailsPage.responsive.css';

/**
 * @requires Components
 */
import {
    PageHeader,
} from '../../components';
import {
    Photo,
} from '../../uikit';

/**
 * @interface IDetailsPage
 * @description DetailsPage props types
 */
export interface IDetailsPage{
    children?: React.ReactNode;
}

/**
 * @function DetailsPage
 * @param props - props for children 
 * @returns {DetailsPage}
 */
export function DetailsPage({children}: IDetailsPage){
    /**
     * @constant className - build the css classes to add to the DetailsPage
     */
    const className = clsx(
        'DetailsPage',
    );
    return (<>
        <section className={className}>
            <PageHeader />
        </section>
    </>);
}
