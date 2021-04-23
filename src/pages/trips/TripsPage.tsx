import React from 'react';
import './TripsPage.css';

interface ITripsPage{
    children?: React.ReactNode;
}

export function TripsPage({children}: ITripsPage){
    return (<>
        <section className='TripsPage'>
            {children}
        </section>
    </>);
}
