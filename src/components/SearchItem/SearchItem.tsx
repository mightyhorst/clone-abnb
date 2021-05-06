import React from "react";
import clsx from "clsx";

/**
 * @requires Styles
 */
import "./SearchItem.css";
import "./SearchItem.responsive.css";

/**
 * @requires Components
 */
import { ImageCarousel, IImage, Button } from "../../uikit";

/**
 * @interface ISearchItem
 * @description SearchItem props types
 */
export interface ISearchItem {
  images: IImage[];
  subTitle: string;
  title: string;
  noOfGuests: number;
  noOfBeds: number;
  noOfBaths: number;
  isLoved?: boolean;
}

/**
 * @function SearchItem
 * @param props - props for children
 * @returns {SearchItem}
 */
export function SearchItem(props: ISearchItem) {
  return (
    <>
      <div className="SearchItem">
        <ImageCarousel title="Superhost" images={props.images} />
        <div className="SearchItemDetails">
          <div className="SearchItemHeader">
            <div className="SearchItemHeader-subtitle">
              <h4>{props.subTitle}</h4>
            </div>
            <div className="SearchItemHeader-title">
              <h3>{props.title}</h3>
            </div>
            <Button variant="love">
              <span>
                <svg
                  viewBox="0 0 32 32"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                </svg>
              </span>
            </Button>
          </div>
          <div className="section-border"></div>
          <div className="SearchItemStats">
            <span>{props.noOfGuests} guests</span>
            <span>
              {props.noOfBeds} bed{props.noOfBeds > 1 && "s"}
            </span>
            <span>
              {props.noOfBaths} bath{props.noOfBaths > 1 && "s"}
            </span>
          </div>
          <div className="SearchItemDates">“14 Dec - 25 Dec”</div>
          <footer className="SearchItemFooter">
            <div className="SearchItemRatings">
              stars= 4.70 totalReviews=22000
            </div>
            <div className="SearchItemPrice">
              price=87 discounted=77 nights=10
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
