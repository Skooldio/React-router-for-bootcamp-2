/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import { CountryDetail } from "./components/CountryDetail";
import { CountryListing } from "./components/CountryListing";

function App() {
  const [countryDetail, setCountryDetail] = useState(null);

  if (countryDetail) {
    return (
      <CountryDetail
        countryDetail={countryDetail}
        onBack={() => setCountryDetail(null)}
      />
    )
  }

return <CountryListing onSelect={value => setCountryDetail(value)} />
}

export default App;
