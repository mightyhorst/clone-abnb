import React from 'react';

import'./ThingsToKnowCol.css';

export interface ThingsToKnowColProps{
    children: React.ReactNode;
}
/**
 * ThingsToKnowCol
 * @param {ThingsToKnowColProps} props - ThingsToKnowCol props 
 */
export function ThingsToKnowCol({children}: ThingsToKnowColProps){
    return (<>
        <section className='ThingsToKnowCol'>
            {children}
        </section>
    </>);
}
