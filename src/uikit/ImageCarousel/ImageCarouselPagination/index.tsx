import React, { useState } from "react";

import "./ImageCarouselPagination.css";

export interface IImageCarouselPagination {
  pages: number;
  activePage?: number;
}
export function ImageCarouselPagination(props: IImageCarouselPagination) {
  const [activePage, setActivePage] = useState(props.activePage || 0);
  const onClickHandler = (index: number) => {
    setActivePage(index);
  };
  return (
    <>
      <div className="pagination-section">
        <div className="pagination-dots">
          <nav className="ImageCarouselPagination image-carousel-pagination">
            {Array.from(Array(props.pages)).map((page, index) => (
              <span
                key={index}
                className={activePage === index ? "isActive" : ""}
                onClick={(e) => onClickHandler(index)}
              ></span>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
