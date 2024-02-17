import React from 'react'

import {
  Button,
  Divider,
  Typography
} from '@mui/material'
import { useCountries } from '../hooks/useCountries'
import { Link, useParams } from 'react-router-dom'

export function CountryDetail() {
  const { countryId } = useParams()
  const { countries, loading } = useCountries()

  const country = countries.find(c => c.cca2 === countryId)
  
  if (loading) return <span>Loading</span>
  else if (country === undefined) return <span>Not found</span>

  return (
    <main
      style={{
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <Link to='/'>
        <Button sx={{ marginTop: "1rem" }}>
          All countries
        </Button>
      </Link>
      <Divider sx={{ marginBlock: "1rem" }} />
      <Typography
        variant="h1"
        sx={{
          fontSize: "3rem",
          fontWeight: 500,
          marginTop: "0.5rem",
        }}
      >
        {country.name.common}
      </Typography>
      <Typography variant="overline" sx={{ marginBottom: "1rem" }}>
        {country.region}
      </Typography>

      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        width="100%"
        style={{ aspectRatio: 2 }}
      />
      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Capital
      </Typography>
      <ul>
        {country.capital
          ? country.capital?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>

      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Timezones
      </Typography>
      <ul>
        {country.timezones
          ? country.timezones?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>

      <Typography variant="h3" sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Borders
      </Typography>
      <ul>
        {country.borders
          ? country.borders?.map((item) => <li key={item}>{item}</li>)
          : "-"}
      </ul>
    </main>
  );
}