import React from "react";
import clsx from 'clsx';
import "./Header.css";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderNav } from "./HeaderNav";

interface IHeader {
  children?: React.ReactNode;
  isSticky?: boolean;
}

export function Header({
  isSticky = false, 
  children,
}: IHeader) {
  const className = clsx(
    'Header',
    {isSticky}
  );
  return (
    <>
      <header className={className}>
        <div className="header-content">{children}</div>
      </header>
    </>
  );
}

/**
 * @exports Compound components - reexport sun components so they are grouped together
 */
Header.Logo = HeaderLogo;
Header.Search = HeaderSearch;
Header.Nav = HeaderNav;
