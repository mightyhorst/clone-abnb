import React from 'react';
import clsx from 'clsx';

import './Row.css';

interface IRow{
    children: React.ReactNode;
    addClass?: string;
}
export function Row(props: IRow){
    const className = clsx(
        'Row',
        props.addClass,
    );
    return (<>
        <section className={className}>
            {props.children}
        </section>
    </>);
}
