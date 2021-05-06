import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./ImageCarousel.css";
import "./ImageCarousel.responsive.css";

/**
 * @requires Components
 */
import { ImageCarouselPagination } from "./ImageCarouselPagination";

/**
 * @interface IImage
 * @description Image model
 */
export interface IImage {
  id: string;
  imgSrc: string;
  isActive?: boolean;
}

/**
 * @interface IImageCarousel
 * @description ImageCarousel props types
 */
export interface IImageCarousel {
  title: string;
  images: IImage[];
}

/**
 * @function ImageCarousel
 * @param props - props for children
 * @returns {ImageCarousel}
 */
export function ImageCarousel({ title, images }: IImageCarousel) {
  return (
    <>
      <article className="ImageCarousel image-carousel">
        <h3 className="image-carousel__title">{title}</h3>
        <div className="control-arrows-section">
          <div className="control-arrows">
            <div className="left-arrow">
              <button className="image-carousel__left">
                <i className="fa fa-chevron-left" />
              </button>
            </div>
            <div className="right-arrow">
              <button className="image-carousel__right">
                <i className="fa fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>

        <ul className="image-carousel__nav">
          {images.map((img) => {
            return (
              <li
                key={img.id}
                className={clsx("image-carousel__nav-item", {
                  isActive: img.isActive
                })}
              >
                <img src={img.imgSrc} alt={img.id} />
              </li>
            );
          })}
        </ul>
        <ImageCarouselPagination pages={15} activePage={0} />
      </article>
    </>
  );
}
