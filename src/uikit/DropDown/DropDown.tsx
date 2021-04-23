import React from 'react';
import './DropDown.css';

// import { Button } from '@uikit/Button';
import { Button } from '..';
import { DropDownMenu } from './DropDownMenu';
import { DropDownMenuItem } from './DropDownMenuItem';

interface IDropDown{
    children?: React.ReactNode;
    isOpen?: boolean;
}

export function DropDown(props: IDropDown){
    return (<>
        <div className='DropDown'>
            <Button>
                <img className='icon-bars' alt='' src='/img/placeholder.png' />
                <img className='profile' alt='' src='/img/placeholder.png' />
                <div className='notifications' />
            </Button>
            <DropDownMenu isOpen={props.isOpen}>
                {props.children}
            </DropDownMenu>
        </div>
    </>);
}

/**
 * @exports compount components to help build different menus in the pages
 */
DropDown.Item = DropDownMenuItem;