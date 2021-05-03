import React from 'react';
import clsx from 'clsx';

interface IconProps{
    variant: 'trophy';
}
export function Icon({variant}: IconProps){
    const className = clsx(
        'Icon',
        `icon-${variant}`
    );
    return (<>
        <i className={className} />
    </>);
}

export function IconTrophy(){
    return <Icon variant='trophy' />;
}
Icon.Trophy = IconTrophy;

