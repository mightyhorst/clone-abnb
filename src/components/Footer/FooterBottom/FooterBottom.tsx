import React from "react";
import "./FooterBottom.css";

interface IFooterBottom {
  children?: React.ReactNode;
}
export function FooterBottom(props: IFooterBottom) {
  return (
    <>
      <footer className="FooterBottom">
        <div className="bootom-content">
          <FooterBottomLeft />
          <FooterBottomRight />
        </div>
      </footer>
    </>
  );
}

function FooterBottomLeft(props: IFooterBottom) {
  return (
    <>
      <ul className="FooterBottomLeft">
        <li>&copy; 2021 AirBnB</li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </>
  );
}

function FooterBottomRight(props: IFooterBottom) {
  return (
    <>
      <ul className="FooterBottomRight">
        <li>
          <a href="#">English (AU)</a>
        </li>
        <li>
          <a href="#">$ AUD</a>
        </li>
        <li>
          <a href="#">Facebook Icon</a>
        </li>
        <li>
          <a href="#">Twitter Icon</a>
        </li>
        <li>
          <a href="#">Insta Icon</a>
        </li>
      </ul>
    </>
  );
}
