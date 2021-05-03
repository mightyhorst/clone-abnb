import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './ImageCarousel.css';
import './ImageCarousel.responsive.css';

/**
 * @requires Components
 */

/**
 * @interface IImageCarousel
 * @description ImageCarousel props types
 */
export interface IImageCarousel{
    children?: React.ReactNode;
    title: string;
}

const images = [
    {
        id: '1',
        imgSrc: '/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg',
        isActive: true,
    },
    {
        id: '2',
        imgSrc: '/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg',
        isActive: false,
    },
    {
        id: '3',
        imgSrc: '/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg',
        isActive: false,
    },
];

/**
 * @function ImageCarousel
 * @param props - props for children 
 * @returns {ImageCarousel}
 */
export function ImageCarousel({children, title}: IImageCarousel){
    return (<>
        <article className='ImageCarousel image-carousel'>
            <h3 className='image-carousel__title'>
                {title}
            </h3>
            <button className='image-carousel__left'>
                <i className='fa fa-chevron-left' />
            </button>
            <button className='image-carousel__right'>
                <i className='fa fa-chevron-right' />
            </button>
            <ul className='image-carousel__nav'>
                {
                    images.map((img) => {
                        return (
                            <li className={clsx('image-carousel-nav-item', {isActive: img.isActive})}>
                                <img src={img.imgSrc} alt={img.id} />
                            </li>
                        );
                    })
                }
            </ul>
        </article>
    </>);
}
