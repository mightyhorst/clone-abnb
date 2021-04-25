import React from 'react';
import './Tab.css';
import clsx from 'clsx';

import {TabLayout} from './TabLayout';
import {TabContainer} from './TabContainer';
import {TabPanel} from './TabPanel';

interface ITab{
    children: React.ReactNode;
    isActive?: boolean;
}
export function Tab(props: ITab){

    /**
     * @constant className - build the css classes to add to the Tab
     *  - it always has 'Tab' class
     *  - if isActive, add class "isActive"
     */
    const className = clsx(
        'Tab',
        {
            isActive: props.isActive,
        }, 
    );
    return (<>
        <div className={className}>
            {props.children}
        </div>
    </>);
}

/**
 * @exports compound components to make the declarative syntax easier
 */
Tab.Layout = TabLayout;
Tab.Container = TabContainer;
Tab.Panel = TabPanel;
