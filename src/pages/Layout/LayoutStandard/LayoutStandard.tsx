import React from 'react';
import './LayoutStandard.css';
import clsx from 'clsx';

import {
    Header,
    Footer, 
} from '../../../components';
import {
    Button,
    DropDown,
} from '../../../uikit';

interface ILayoutStandard {
    children?: React.ReactNode;
    pageName: string;
}

export function LayoutStandard(props: ILayoutStandard) {

    const onClickWorld = () => {
        console.log('clicked the world icon');
    }

    const header = (<>
        <Header>
            <Header.Logo />
            <Header.Search />
            <Header.Nav>
                <Button href="#">
                    Switch to Hosting
                </Button>
                <Button onClick={onClickWorld}>
                    world icon
                </Button>
                <DropDown>
                    <DropDown.Item isBold href="#">
                        Messages
                    </DropDown.Item>
                    <DropDown.Item isBold hasNotifications href="#">
                        Notifications
                    </DropDown.Item>
                    <DropDown.Item isBold href="#">
                        Trips
                    </DropDown.Item>
                    <DropDown.Item isDivider />
                    <DropDown.Item href="#">
                        other stuff
                    </DropDown.Item>
                </DropDown>
            </Header.Nav>
        </Header>
    </>);

    const footer = (<>
        <Footer>
            <Footer.Container>
                <Footer.Menu title='About'>
                    <Footer.Menu.Item href='#'>
                        How AirBnB works
                    </Footer.Menu.Item>
                    <Footer.Menu.Item href='#'>
                        Newsroom
                    </Footer.Menu.Item>
                </Footer.Menu>
                <Footer.Menu title='Community'>
                    <Footer.Menu.Item href='#'>
                        Diversity and Belonging
                    </Footer.Menu.Item>
                    <Footer.Menu.Item href='#'>
                        Accessibility
                    </Footer.Menu.Item>
                </Footer.Menu>
                <Footer.Menu title='Host'>
                    <Footer.Menu.Item href='#'>
                        Host your own home
                    </Footer.Menu.Item>
                    <Footer.Menu.Item href='#'>
                        Host an online experience
                    </Footer.Menu.Item>
                </Footer.Menu>
                <Footer.Menu title='Support'>
                    <Footer.Menu.Item href='#'>
                        Our Covid 19 Response
                    </Footer.Menu.Item>
                    <Footer.Menu.Item href='#'>
                        Help Centre
                    </Footer.Menu.Item>
                </Footer.Menu>
            </Footer.Container>
            <Footer.Bottom />
        </Footer>
    </>);

    return (<>
        <section className={clsx('LayoutStandard', props.pageName)}>
            {header}
            {props.children}
            {footer}
        </section>
    </>);
}