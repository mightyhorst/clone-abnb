import React from 'react';
import './TabPanel.css';

import {TabPanelContainer} from './TabPanelContainer';

interface ITabPanel{
    children: React.ReactNode;
}
export function TabPanel({children}: ITabPanel){
    const className = 'TabPanel';
    return (<>
        <section className={className}>
            {children}
        </section>
    </>);
}

/**
 * @exports Compound components
 */
TabPanel.Container = TabPanelContainer;
