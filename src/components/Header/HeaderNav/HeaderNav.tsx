import React from "react";
import "./HeaderNav.css";

interface IHeaderNav {
  children: React.ReactNode;
}

export function HeaderNav(props: IHeaderNav) {
  return (
    <>
      <div className="HeaderNav">{props.children}</div>
    </>
  );
}
