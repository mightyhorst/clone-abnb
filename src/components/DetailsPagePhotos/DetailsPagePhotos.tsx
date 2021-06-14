import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./DetailsPagePhotos.css";
import "./DetailsPagePhotos.responsive.css";

/**
 * @requires Components
 */
import { Photo } from "../../uikit";

/**
 * @interface IDetailsPagePhotos
 * @description DetailsPagePhotos props types
 */
export interface IDetailsPagePhotos {
  // children?: React.ReactNode;
}

/**
 * @function DetailsPagePhotos
 * @param props - props for children
 * @returns {DetailsPagePhotos}
 */
export function DetailsPagePhotos(props: IDetailsPagePhotos) {
  return (
    <>
      <Photo.Container>
        <div className="photo-container">
          <div className="single-large-image">
            <Photo.Col>
              <Photo variant="featured" src="/img/house1.jpg" />
            </Photo.Col>
          </div>
          <div className="double-small-images">
            <Photo.Col>
              <Photo src="/img/house2.jpg" />
              <Photo src="/img/house3.jpg" />
            </Photo.Col>
            <Photo.Col>
              <Photo src="/img/house4.jpg" />
              <Photo src="/img/house1.jpg" />
            </Photo.Col>
          </div>
        </div>
      </Photo.Container>
    </>
  );
}
