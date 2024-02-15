import { createBrowserRouter } from 'react-router-dom'

import { CountryListing } from './components/CountryListing'
import { CountryDetail } from './components/CountryDetail'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <CountryListing />
  },
  {
    path: '/country/:countryId',
    element: <CountryDetail />
  },
])
