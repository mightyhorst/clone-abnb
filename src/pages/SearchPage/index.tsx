import React from "react";
import "./SearchPage.css";

import { Layout } from "../Layout";
import { 
  Column,
  Map,
} from "../../uikit";

interface ISearchPage {
  map?: {
    lat: number;
    lng: number;
    zoom?: number;
  }
}

export function SearchPage({map}: ISearchPage) {
  return (
    <>
      <Layout.Standard pageName="SearchPage" hideSearch>
        <Column.Container>
          <Column.Half>
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
