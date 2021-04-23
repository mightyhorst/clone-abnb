import React from 'react';
import './FooterContainer.css';

interface IFooterContainer{
    children: React.ReactNode;
}
export function FooterContainer(props: IFooterContainer){
    return (<>
        <section className='FooterContainer'>
            {props.children}
        </section>
    </>);
}
