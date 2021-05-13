import React from 'react';

/**
 * @requires Styles
 */
import './TemplatePage.css';
import './TemplatePage.responsive.css';

/**
 * @requires Components
 */
import {
    
} from '../../components';
import {
    
} from '../../uikit';

/**
 * @interface ITemplatePage
 * @description TemplatePage props types
 */
export interface ITemplatePage{
}

/**
 * @function TemplatePage
 * @param {ITemplatePage} props - props for children 
 * @returns {TemplatePage}
 */
export function TemplatePage(props: ITemplatePage){
    return (<>
        <section className='TemplatePage'>
            
        </section>
    </>);
}
