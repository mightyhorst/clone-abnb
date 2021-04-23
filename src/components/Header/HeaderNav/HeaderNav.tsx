import React from 'react';
import './HeaderNav.css';

// import { Button } from '@uikit/Button';
import { Button } from '../../../uikit';
import { HeaderNavMenu } from './HeaderNavMenu';
import { HeaderNavMenuItem } from './HeaderNavMenuItem';

interface IHeaderNav{
    children?: React.ReactNode;
}

export function HeaderNav(props: IHeaderNav){
    return (<>
        <div className='HeaderNav'>
            <Button>
                Header Search Icon goes here
            </Button>
            <HeaderNavMenu>
                {props.children}
            </HeaderNavMenu>
        </div>
    </>);
}

/**
 * @exports compount components to help build different menus in the pages
 */
HeaderNav.Item = HeaderNavMenuItem;