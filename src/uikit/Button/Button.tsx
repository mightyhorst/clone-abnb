import React from 'react';
import './Button';
import clsx from 'clsx';

import {Icon} from '../Icon';

interface IButton{
    children: React.ReactNode;
    variant?: 'primary' | 'info' | 'small' | 'love';
    href?: string;
    onClick?: () => void;
}
export function Button(props: IButton){

    const onClickHandler = () => {
        if(props.onClick) props.onClick();
    }

    /**
     * @constant className - build the css classes to add to the Button
     *  - it always has 'Button' class
     *  - if a "variant" is passed as a prop, it will add the name of that variant as a class
     *      e.g. "primary" or "info"
     *  - if no variant is set, no class will be added
     */
    const className = clsx(
        'Button',
        props.variant, 
    );
    return (<>
        { props.href ?
            <a className={className} href={props.href}>
                {props.children}
            </a>
            :
            <button className={className} onClick={onClickHandler}>
                {props.children}
            </button>
        }
    </>);
}
interface IButtonLove{
    href?: string;
    onClick?: () => void;
    isLoved?: boolean;
}
function ButtonLove({isLoved = false, ...props}: IButtonLove){
    return (
        <Button variant='love' {...props}>
            <Icon.Love isLoved={isLoved} />
        </Button>
    );
}
Button.Love = ButtonLove;
