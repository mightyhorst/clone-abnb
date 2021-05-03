import React from "react";

/**
 * @requires Styles
 */
import "./SearchPage.css";

/**
 * @requires Layout
 */
import {
  Layout, 
} from "../Layout";

/**
 * @requires Components
 */
import {
  SearchResults,
  SearchResult,
} from '../../components';

/**
 * @requires UIKit
 */
import { 
  Column,
  Map,
  Button,
  Icon,
} from "../../uikit";

/**
 * @constant {SearchResultsList} searchResultsList - search result list 
 */
const searchResultsList = (<>
  <SearchResults.List>
    <SearchResult>
      cool
    </SearchResult>
  </SearchResults.List>
</>);

/**
 * @constant {SearchResults} searchResults - search result component
 */
const searchResults = (<>
  <SearchResults>
    <SearchResults.Header>
      <h4>
        300+ stays Week in May 1 guest
      </h4>
      <h1>
        Stays in Adelaide
      </h1>
    </SearchResults.Header>
    <SearchResults.Filters>
      <Button variant='small'>
        Cancelation Policy
      </Button>
      <Button variant='small'>
        Type of Place
      </Button>
      <Button variant='small'>
        Price
      </Button>
      <Button variant='small'>
        More filters
      </Button>
    </SearchResults.Filters>
    <SearchResults.Callout>
      <Icon.Trophy />
      <strong>
        More than 35,000 guest have stayed here
      </strong>
      <span>
        On average they have rated their stays
      </span>
    </SearchResults.Callout>
    {searchResultsList}
  </SearchResults>
</>);

 /**
  * @interface ISearchPage
  */
interface ISearchPage {
  map?: {
    lat: number;
    lng: number;
    zoom?: number;
  }
}

/**
 * Search Page
 * @param props - props for search page
 */
export function SearchPage({map}: ISearchPage) {
  return (
    <>
      <Layout.Standard pageName="SearchPage" hideSearch>
        <Column.Container>
          <Column.Half>
            {searchResults}
          </Column.Half>
          <Column.Half>
            <Map 
              center={{
                lat: map?.lat || 90,
                lng: map?.lng || 90,
              }}
              zoom={map?.zoom || 1}
            />
          </Column.Half>
        </Column.Container>
      </Layout.Standard>
    </>
  );
}
