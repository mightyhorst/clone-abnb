import React from 'react';
import './TripsPage.css';

import {
    Header,
} from '../../components';

interface ITripsPage{
    children?: React.ReactNode;
}

export function TripsPage(props: ITripsPage){
    return (<>
        <section className='TripsPage'>
            <Header>
                <Header.Logo />
                <Header.Search />
                <Header.Nav>
                    <Header.Nav.Item isBold>
                        Messages
                    </Header.Nav.Item>
                    <Header.Nav.Item isBold hasNotifications>
                        Notifications
                    </Header.Nav.Item>
                    <Header.Nav.Item isDivider />
                    <Header.Nav.Item>
                        other stuff
                    </Header.Nav.Item>
                </Header.Nav>
            </Header>
            {props.children}
        </section>
    </>);
}