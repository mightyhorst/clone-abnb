import React from "react";
import "./DropDown.css";

// import { Button } from '@uikit/Button';
import { Button } from "..";
import { DropDownMenu } from "./DropDownMenu";
import { DropDownMenuItem } from "./DropDownMenuItem";

interface IDropDown {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export function DropDown(props: IDropDown) {
  return (
    <>
      <div className="DropDown">
        <button className="menu-btn">
          <div className="main-navigation-menu">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none" fillRule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>
          </div>
          <div className="profile-div" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </div>
          <div className="notification-mark">1</div>
        </button>
        <DropDownMenu isOpen={props.isOpen}>{props.children}</DropDownMenu>
      </div>
    </>
  );
}

/**
 * @exports compount components to help build different menus in the pages
 */
DropDown.Item = DropDownMenuItem;
