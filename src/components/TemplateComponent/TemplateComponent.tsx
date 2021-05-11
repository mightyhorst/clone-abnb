import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './TemplateComponent.css';
import './TemplateComponent.responsive.css';

/**
 * @requires Components
 */
import {} from '..';
import {} from '../../uikit';

/**
 * @interface ITemplateComponent
 * @description TemplateComponent props types
 */
export interface ITemplateComponent{
    children?: React.ReactNode;
}

/**
 * @function TemplateComponent
 * @param props - props for children 
 * @returns {TemplateComponent}
 */
export function TemplateComponent({children}: ITemplateComponent){
    /**
     * @constant className - build the css classes to add to the TemplateComponent
     */
    const className = clsx(
        'TemplateComponent',
    );
    return (<>
        <div className={className}>
            {children}
        </div>
    </>);
}
