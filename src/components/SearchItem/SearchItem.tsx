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
            <span> . </span>
            <span>
              {props.noOfBeds} bed{props.noOfBeds > 1 && "s"}
            </span>
            <span> . </span>
            <span>
              {props.noOfBaths} bath{props.noOfBaths > 1 && "s"}
            </span>
          </div>
          <div className="SearchItemDates">14 Dec - 25 Dec</div>
          <footer className="SearchItemFooter">
            <div className="SearchItemRatings">
              <span>
                <svg
                  viewBox="0 0 1000 1000"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
              </span>
              <strong>4.70</strong>(22K reviews)
            </div>
            <div className="SearchItemPrice">
              $̶8̶7̶ <strong>$77 AUD</strong> /nights
              <span>$189.00 AUD total</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
