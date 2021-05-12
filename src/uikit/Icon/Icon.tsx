import React from 'react';
import clsx from 'clsx';

interface IconProps{
    variant: 'trophy' | 
        'share' | 
        'love' | 
        'star' | 
        'medal' | 
        'verified' | 
        'kitchen' | 
        'fireplace' |
        'essentials' |
        'heating' |
        'firstaid' |
        'parking' |
        'washing' |
        'hangers' |
        'smokealarm' |
        'carbonalarm';
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

export function IconVerified(){
    return <Icon variant='verified' />;
}
Icon.Verified = IconVerified;

/**
 * @variant IconKitchen
 */
export function IconKitchen(){
    return <Icon variant='kitchen' />;
}
Icon.Kitchen = IconKitchen;

/**
 * @variant IconFireplace
 */
export function IconFireplace(){
    return <Icon variant='fireplace' />;
}
Icon.Fireplace = IconFireplace;

/**
 * @variant IconEssentials
 */
export function IconEssentials(){
    return <Icon variant='essentials' />;
}
Icon.Essentials = IconEssentials;

/**
 * @variant IconHeating
 */
export function IconHeating(){
    return <Icon variant='heating' />;
}
Icon.Heating = IconHeating;

/**
 * @variant IconFirstAid
 */
export function IconFirstAid(){
    return <Icon variant='firstaid' />;
}
Icon.FirstAid = IconFirstAid;

/**
 * @variant IconParking
 */
export function IconParking(){
    return <Icon variant='parking' />;
}
Icon.Parking = IconParking;

/**
 * @variant IconWashing
 */
export function IconWashing(){
    return <Icon variant='washing' />;
}
Icon.Washing = IconWashing;

/**
 * @variant IconHangers
 */
export function IconHangers(){
    return <Icon variant='hangers' />;
}
Icon.Hangers = IconHangers;

/**
 * @variant IconSmokeAlarm
 */
export function IconSmokeAlarm(){
    return <Icon variant='smokealarm' />;
}
Icon.SmokeAlarm = IconSmokeAlarm;

/**
 * @variant IconCarbonAlarm
 */
export function IconCarbonAlarm(){
    return <Icon variant='carbonalarm' />;
}
Icon.CarbonAlarm = IconCarbonAlarm;
