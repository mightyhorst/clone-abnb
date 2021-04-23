import React from 'react';
import './TripsPage.css';

import {
    Header,
} from '../../components';

interface ITripsPage{
    children?: React.ReactNode;
}

export function TripsPage({children}: ITripsPage){
    return (<>
        <section className='TripsPage'>
            <Header>
                <Header.Logo> Header Logo goes here</Header.Logo>
            </Header>
            {children}
        </section>
    </>);
}