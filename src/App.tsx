import React from "react";
import "./App.css";

import { 
  TripsPage, 
  SearchPage,
  DetailsPage,
} from "./pages";

function App() {
  return (
    <main className="App">
      {/* <TripsPage /> */}
      {/* <SearchPage /> */}
      <DetailsPage />
    </main>
  );
}

export default App;
