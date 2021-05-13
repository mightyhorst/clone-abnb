import React from "react";
import "./Footer.css";

import { FooterBottom } from "./FooterBottom";
import { FooterMenu } from "./FooterMenu";
import { FooterContainer } from "./FooterContainer";

interface IFooter {
  children: React.ReactNode;
}
export function Footer(props: IFooter) {
  return (
    <>
      <footer className="Footer">
        <div className="footer-container">{props.children}</div>
      </footer>
    </>
  );
}

/**
 * @exports Compound components
 */
Footer.Container = FooterContainer;
Footer.Bottom = FooterBottom;
Footer.Menu = FooterMenu;
