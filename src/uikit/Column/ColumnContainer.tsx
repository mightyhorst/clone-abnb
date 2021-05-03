import React from 'react';
import clsx from 'clsx';

import './ColumnContainer.css';

interface IColumnContainer{
    children: React.ReactNode;
}
export function ColumnContainer(props: IColumnContainer){
    return (<>
        <section className='ColumnContainer'>
            {props.children}
        </section>
    </>);
}
