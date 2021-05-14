import React from 'react';
import './DiscoverExperienceCard.css';

/**
 * @interface DiscoverExperienceCardProps
 */
interface DiscoverExperienceCardProps{
    imgSrc: string;
    title: string;
    description: number;
}

/**
 * @function DiscoverExperienceCard
 * @param {DiscoverExperienceCardProps} props - discover experience props
 */
export function DiscoverExperienceCard({
    imgSrc,
    title,
    description,
}: DiscoverExperienceCardProps){
    return (
        <div className='DiscoverExperienceCard'>
            <img 
                className='discover-experience__img'
                src={imgSrc} 
                alt="discover experience" 
            />
            <div className="discover-experience__card-details">
                <strong>
                    {title}
                </strong>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

/**
 * @interface DiscoverExperienceCardListProps
 */
interface DiscoverExperienceCardListProps{
    children: React.ReactNode;
}

/**
 * @function DiscoverExperienceCardList
 * @param {DiscoverExperienceCardListProps} props - discover experience props
 */
export function DiscoverExperienceCardList({children}: DiscoverExperienceCardListProps){
    return (
        <div className='DiscoverExperienceCardList discover-experience__card-list'>
            {children}
        </div>
    );
}

/**
 * @exports DiscoverExperienceCard compounds
 */
DiscoverExperienceCard.List = DiscoverExperienceCardList;
