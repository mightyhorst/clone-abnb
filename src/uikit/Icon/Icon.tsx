import React from 'react';
import clsx from 'clsx';

interface IconProps{
    variant: 'trophy' | 'share' | 'love' | 'star' | 'medal';
    addClass?: string;
}
export function Icon({variant, addClass}: IconProps){
    const className = clsx(
        'Icon',
        `icon-${variant}`,
        addClass,
    );
    return (<>
        <i className={className} />
    </>);
}

export function IconTrophy(){
    return <Icon variant='trophy' />;
}
Icon.Trophy = IconTrophy;

export function IconShare(){
    return <Icon variant='share' />;
}
Icon.Share = IconShare;

interface IconLoveProps{
    isLoved?: boolean;
}
export function IconLove({isLoved = false}: IconLoveProps){
    return <Icon variant='love' />;
}
Icon.Love = IconLove;

export function IconStar(){
    return <Icon variant='star' />;
}
Icon.Star = IconStar;

export function IconMedal(){
    return <Icon variant='medal' />;
}
Icon.Medal = IconMedal;

