import React from 'react';
import './TabLayout.css';

interface ITabLayout{
    children: React.ReactNode;
}
export function TabLayout({children}: ITabLayout){
    const className = 'TabLayout';
    return (<>
        <section className={className}>
            {children}
        </section>
    </>);
}
