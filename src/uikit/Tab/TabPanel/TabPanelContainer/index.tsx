import React from 'react';
import './TabPanelContainer.css';

interface ITabPanelContainer{
    children: React.ReactNode;
}
export function TabPanelContainer({children}: ITabPanelContainer){
    const className = 'TabPanelContainer';
    return (<>
        <section className={className}>
            {children}
        </section>
    </>);
}
