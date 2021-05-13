import React from 'react';
import clsx from 'clsx';

/**
 * @requires Styles
 */
import './PageHeader.css';
import './PageHeader.responsive.css';

/**
 * @requires Components
 */
import { 
  Header, 
  Button, 
  DropDown, 
} from "../../uikit";

/**
 * @interface IPageHeader
 * @description PageHeader props types
 */
export interface IPageHeader {
  // children?: React.ReactNode;
  hideSearch?: boolean;
  isSticky?: boolean;
}

/**
 * @function PageHeader
 * @param props - props for children 
 * @returns {PageHeader}
 */
export function PageHeader({ 
  hideSearch = false, 
  isSticky = false, 
}: IPageHeader) {
  /**
   * @event onClick - click the world icon
   */
  const onClickWorld = () => {
    console.log("clicked the world icon");
  };

  /**
   * @constant iconGlobe - globe icon
   */
  const iconGlobe = (
    <div className="header__globe-icon" aria-hidden="true">
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <path 
          d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" 
        />
      </svg>
    </div>
  );

  /**
   * @constant switchToHosting - switch to hosting
   */
  const switchToHosting = (<>
    <a href="#" className="header__switch-to-hosting">
      Switch to Hosting
    </a>
  </>);

  /**
   * @constant className - build the css classes to add to the PageHeader
   */
  const className = clsx(
    'PageHeader',
  );
  return (<>
    <Header isSticky={isSticky}>
      <Header.Logo />
      {!hideSearch && <Header.Search />}
      <Header.Nav>
        <nav className="header__nav">

          <div className="header__nav-btns">

            {switchToHosting}

            <div className="header__globe">
              <Button onClick={onClickWorld}>
                {iconGlobe}
              </Button>
            </div>
          </div>

          <div className="header__profile">
            <div className="header__dropdown">
              <DropDown isOpen={false}>
                <DropDown.Item isBold href="#">
                  Messages
                </DropDown.Item>
                <DropDown.Item isBold href="#">
                  Notifications
                  <div className="hasNotifications"></div>
                </DropDown.Item>
                <DropDown.Item isBold href="#/trips">
                  Trips
                </DropDown.Item>
                <DropDown.Item isBold href="#">
                  Wishlist
                </DropDown.Item>
                <DropDown.Item isDivider />
                <DropDown.Item href="#/search">
                  (@debug) Search Page
                </DropDown.Item>
                <DropDown.Item href="#/details">
                  (@debug) Details Page
                </DropDown.Item>
                <DropDown.Item href="#/trips">
                  (@debug) Trips Page
                </DropDown.Item>
                <DropDown.Item href="#/home">
                  (@debug) Home Page
                </DropDown.Item>
                <DropDown.Item isDivider />
                <DropDown.Item href="#">
                  Manage listing
                </DropDown.Item>
                <DropDown.Item href="#">
                  Host an experience
                </DropDown.Item>
                <DropDown.Item href="#">
                  Account
                </DropDown.Item>
                <DropDown.Item isDivider />
                <DropDown.Item href="#">
                  Help
                </DropDown.Item>
                <DropDown.Item href="#">
                  Log out
                </DropDown.Item>
              </DropDown>
            </div>
          </div>
        </nav>
      </Header.Nav>
    </Header>
  </>);
}
