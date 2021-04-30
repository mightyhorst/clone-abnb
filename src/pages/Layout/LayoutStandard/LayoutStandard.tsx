import React from "react";
import "./LayoutStandard.css";
import clsx from "clsx";

import { Header, Footer } from "../../../components";
import { Button, DropDown } from "../../../uikit";

interface ILayoutStandard {
  children?: React.ReactNode;
  pageName: string;
  hideSearch?: boolean;
}

export function LayoutStandard(props: ILayoutStandard) {
  const onClickWorld = () => {
    console.log("clicked the world icon");
  };

  const header = (
    <>
      <Header>
        <Header.Logo />
        {!props.hideSearch && <Header.Search />}
        <Header.Nav>
          <nav className="header-navbar">
            <div className="nav-btns">
              
              <a href="#" className="btn btn-host">
                Switch to Hosting
              </a>
              
              <div className="globe-div">
                <Button onClick={onClickWorld}>
                  <div className="globe-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                    </svg>
                  </div>
                </Button>
              </div>
            </div>
            <div className="profile-section">
              <div className="dropdown-menu-section">
                <DropDown isOpen={true}>
                  <DropDown.Item isBold href="#">
                    Messages
                  </DropDown.Item>
                  <DropDown.Item isBold href="#">
                    Notifications
                    <div className="hasNotifications"></div>
                  </DropDown.Item>
                  <DropDown.Item isBold href="#">
                    Trips
                  </DropDown.Item>
                  <DropDown.Item isBold href="#">
                    wishlist
                  </DropDown.Item>
                  <DropDown.Item isDivider />
                  <DropDown.Item href="#">Manage listing</DropDown.Item>
                  <DropDown.Item href="#">host an experience</DropDown.Item>
                  <DropDown.Item href="#">account</DropDown.Item>
                  <DropDown.Item isDivider />
                  <DropDown.Item href="#">help</DropDown.Item>
                  <DropDown.Item href="#">Log out</DropDown.Item>
                </DropDown>
              </div>
            </div>
          </nav>
        </Header.Nav>
      </Header>
    </>
  );

  const footer = (
    <>
      <Footer>
        <Footer.Container>
          <Footer.Menu title="About">
            <Footer.Menu.Item href="#">How AirBnB works</Footer.Menu.Item>
            <Footer.Menu.Item href="#">Newsroom</Footer.Menu.Item>
          </Footer.Menu>
          <Footer.Menu title="Community">
            <Footer.Menu.Item href="#">
              Diversity and Belonging
            </Footer.Menu.Item>
            <Footer.Menu.Item href="#">Accessibility</Footer.Menu.Item>
          </Footer.Menu>
          <Footer.Menu title="Host">
            <Footer.Menu.Item href="#">Host your own home</Footer.Menu.Item>
            <Footer.Menu.Item href="#">
              Host an online experience
            </Footer.Menu.Item>
          </Footer.Menu>
          <Footer.Menu title="Support">
            <Footer.Menu.Item href="#">Our Covid 19 Response</Footer.Menu.Item>
            <Footer.Menu.Item href="#">Help Centre</Footer.Menu.Item>
          </Footer.Menu>
        </Footer.Container>
        <Footer.Bottom />
      </Footer>
    </>
  );

  return (
    <>
      <section className={clsx("LayoutStandard", props.pageName)}>
        {header}
        {props.children}
        {footer}
      </section>
    </>
  );
}
