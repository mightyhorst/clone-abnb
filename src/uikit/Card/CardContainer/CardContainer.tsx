import React from 'react';
import './CardContainer';
import clsx from 'clsx';

interface ICardContainer{
    children: React.ReactNode;
    variant?: 'trips' | 'recent';
}
export function CardContainer({children, variant = 'trips'}: ICardContainer){

    /**
     * @constant className - build the css classes to add to the CardContainer
     *  - it always has 'CardContainer' class
     *  - if a "variant" is passed as a prop, it will add the name of that variant as a class
     *      e.g. "trips" or "recent"
     *  - if no variant is set, no class will be added
     */
    const className = clsx(
        'CardContainer',
        variant, 
    );
    return (<>
        <section className={className}>
            {children}
        </section>
    </>);
}