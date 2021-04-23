import React from 'react';
import './DropDown.css';

// import { Button } from '@uikit/Button';
import { Button } from '..';
import { DropDownMenu } from './DropDownMenu';
import { DropDownMenuItem } from './DropDownMenuItem';

interface IDropDown{
    children?: React.ReactNode;
}

export function DropDown(props: IDropDown){
    return (<>
        <div className='DropDown'>
            <Button>
                Header Search Icon goes here
            </Button>
            <DropDownMenu>
                {props.children}
            </DropDownMenu>
        </div>
    </>);
}

/**
 * @exports compount components to help build different menus in the pages
 */
DropDown.Item = DropDownMenuItem;