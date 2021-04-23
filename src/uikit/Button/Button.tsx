import React from 'react';
import './Button';
import clsx from 'clsx';

interface IButton{
    children: React.ReactNode;
    variant?: 'primary' | 'info';
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
    return (
        <button className={className} onClick={onClickHandler}>
            {props.children}
        </button>
    );
}