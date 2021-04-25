import React from 'react';
import './TabContainer.css';

interface ITabContainer{
    children: React.ReactNode;
}
export function TabContainer({children}: ITabContainer){
    const className = 'TabContainer';
    return (<>
        <section className={className}>
            {children}
        </section>
    </>);
}
