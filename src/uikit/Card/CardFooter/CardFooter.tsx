import React from 'react';
import './CardFooter.css';

interface ICardFooter{
    children?: React.ReactNode;
    href: string;
}
export function CardFooter(props: ICardFooter){
    return (<>
        <footer className='CardFooter'>
            <a href={props.href}>
                {props.children}
            </a>
        </footer>
    </>);
}
