import React from "react";

/**
 * @requires Styles
 */
import "./SearchPage.css";

/**
 * @requires Layout
 */
import { Layout } from "../Layout";

/**
 * @requires Components
 */
import { SearchResults, SearchItem, SearchPagination } from "../../components";

/**
 * @requires UIKit
 */
import { IImage, Column, Map, Button, Icon } from "../../uikit";

const images: IImage[] = [
  {
    id: "1",
    imgSrc: "/img/2f13349d-879d-43c6-83e3-8e5679291d53.jpg",
    isActive: true
  },
  {
    id: "2",
    imgSrc: "/img/36f53e61-db8d-403c-9122-5b761c0e4264.jpg",
    isActive: false
  },
  {
    id: "3",
    imgSrc: "/img/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg",
    isActive: false
  }
];

/**
 * @constant {SearchResultsList} searchResultsList - search result list
 */
const searchResultsList = (
  <>
    <SearchResults.List>
      <div className="search-item-div">
        <SearchItem
          images={images}
          subTitle="Entire apartment in Adelaide"
          title="Great value. Walk. in the city"
          noOfGuests={2}
          noOfBeds={2}
          noOfBaths={1}
        />
      </div>

      <div className="search-item-div">
        <SearchItem
          images={images}
          subTitle="Entire apartment in Adelaide"
          title="Great value. Walk. in the city"
          noOfGuests={2}
          noOfBeds={2}
          noOfBaths={1}
        />
      </div>

      <div className="search-item-div">
        <SearchItem
          images={images}
          subTitle="Entire apartment in Adelaide"
          title="Great value. Walk. in the city"
          noOfGuests={2}
          noOfBeds={2}
          noOfBaths={1}
        />
      </div>

      <div className="search-item-div">
        <SearchItem
          images={images}
          subTitle="Entire apartment in Adelaide"
          title="Great value. Walk. in the city"
          noOfGuests={2}
          noOfBeds={2}
          noOfBaths={1}
        />
      </div>
    </SearchResults.List>
  </>
);

/**
 * @constant {SearchResults} searchResults - search result component
 */
const searchResults = (
  <>
    <SearchResults>
      <SearchResults.Header>
        <h4>300+ stays Week in May 1 guest</h4>
        <h1>Stays in Adelaide</h1>
      </SearchResults.Header>
      <SearchResults.Filters>
        <div className="search-filter-buttons">
          <div className="search-btn-div">
            <Button variant="small">Cancelation Policy</Button>
          </div>
          <div className="search-btn-div">
            <Button variant="small">Type of Place</Button>
          </div>
          <div className="search-btn-div">
            <Button variant="small">Price</Button>
          </div>
          <div className="search-btn-div">
            <Button variant="small">More filters</Button>
          </div>
        </div>
      </SearchResults.Filters>
      <SearchResults.Callout>
        <div className="search-callout-content">
          <div className="trophy-icon-div">
            <img src="/img/icon-trophy.gif" />
          </div>

          <div className="search-callout-text">
            <strong>More than 35,000 guest have stayed here</strong>
            <span>On average they have rated their stays</span>
          </div>
        </div>
      </SearchResults.Callout>
      {searchResultsList}
    </SearchResults>
  </>
);

/**
 * @interface ISearchPage
 */
interface ISearchPage {
  map?: {
    lat: number;
    lng: number;
    zoom?: number;
  };
}

/**
 * Search Page
 * @param props - props for search page
 */
export function SearchPage({ map }: ISearchPage) {
  return (
    <>
      <Layout.Standard pageName="SearchPage" hideSearch>
        <Column.Container>
          <Column.Half>
            {searchResults}
            <SearchPagination pages={15} activePage={1} />
          </Column.Half>
          <Column.Half>
            <Map
              center={{
                lat: map?.lat || 90,
                lng: map?.lng || 90
              }}
              zoom={map?.zoom || 1}
            />
          </Column.Half>
        </Column.Container>
      </Layout.Standard>
    </>
  );
}
