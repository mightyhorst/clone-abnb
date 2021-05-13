import React from "react";
import "./HeaderSearch.css";

interface IHeaderSearch {
  // children?: React.ReactNode;
}

export function HeaderSearch(props: IHeaderSearch) {
  return (
    <>
      <div className="HeaderSearch">
        <div className="header-searchbar">
          <div className="searchbar">
            <button data-index="0" type="button">
              <div className="location">Great Barrier Island / Aotea</div>
            </button>
            <span className="searchbar-seprater"></span>
            <button data-index="1" type="button">
              <div className="add-data">Add dates</div>
            </button>
            <span className="searchbar-seprater"></span>
            <button data-index="2" type="button">
              <div className="add-data">Add guests</div>
              <div className="search-btn">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
