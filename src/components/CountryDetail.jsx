import React from 'react'

import {
  Button,
  Divider,
  Typography
} from '@mui/material'

export function CountryDetail({ countryDetail, onBack }) {
  return (
    <main
      style={{
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <Button
        sx={{ marginTop: "1rem" }}
        onClick={() => onBack()}
      >
        All countries
      </Button>
      <Divider sx={{ marginBlock: "1rem" }} />
      <Typography
        variant="h1"
        sx={{
          fontSize: "3rem",
          fontWeight: 500,
          marginTop: "0.5rem",
        }}
      >
        {countryDetail.name.common}
      </Typography>
      <Typography variant="overline" sx={{ marginBottom: "1rem" }}>
        {countryDetail.region}
      </Typography>

      <img
        src={countryDetail.flags.svg}
        alt={countryDetail.flags.alt}
        width="100%"
        style={{ aspectRatio: 2 }}
      />
      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Capital
      </Typography>
      <ul>
        {countryDetail.capital
          ? countryDetail.capital?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>

      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Timezones
      </Typography>
      <ul>
        {countryDetail.timezones
          ? countryDetail.timezones?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>

      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Borders
      </Typography>
      <ul>
        {countryDetail.borders
          ? countryDetail.borders?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>
    </main>
  );
}