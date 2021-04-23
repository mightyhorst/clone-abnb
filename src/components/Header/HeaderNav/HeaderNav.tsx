import React from 'react';
import './HeaderNav.css';

import { HeaderNavMenu } from './HeaderNavMenu';
import { HeaderNavMenuItem } from './HeaderNavMenuItem';

interface IHeaderNav{
    children?: React.ReactNode;
}

export function HeaderNav(props: IHeaderNav){
    return (<>
        <div className='HeaderNav'>
            <button>
                Header Search Icon goes here
            </button>
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